import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Pantalla de resultados */}
        <View style={styles.display}>
          <Text style={styles.inputText}>{input || '0'}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>

        {/* Botones de la calculadora */}
        <View style={styles.buttonsContainer}>
          {/* Fila 1 */}
          <View style={styles.row}>
            <Button label="7" onPress={() => handleInput('7')} />
            <Button label="8" onPress={() => handleInput('8')} />
            <Button label="9" onPress={() => handleInput('9')} />
            <Button label="/" onPress={() => handleInput('/')} />
          </View>
          {/* Fila 2 */}
          <View style={styles.row}>
            <Button label="4" onPress={() => handleInput('4')} />
            <Button label="5" onPress={() => handleInput('5')} />
            <Button label="6" onPress={() => handleInput('6')} />
            <Button label="*" onPress={() => handleInput('*')} />
          </View>
          {/* Fila 3 */}
          <View style={styles.row}>
            <Button label="1" onPress={() => handleInput('1')} />
            <Button label="2" onPress={() => handleInput('2')} />
            <Button label="3" onPress={() => handleInput('3')} />
            <Button label="-" onPress={() => handleInput('-')} />
          </View>
          {/* Fila 4 */}
          <View style={styles.row}>
            <Button label="0" onPress={() => handleInput('0')} />
            <Button label="." onPress={() => handleInput('.')} />
            <Button label="+" onPress={() => handleInput('+')} />
            <TouchableOpacity style={[styles.button, styles.equalsButton]} onPress={calculateResult}>
              <Ionicons name="checkmark" size={32} color="#fff" />
            </TouchableOpacity>
          </View>
          {/* Botón Clear */}
          <View style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearInput}>
              <Ionicons name="trash" size={32} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    width: '100%', // Asegura que ocupe todo el ancho
    height: '100%', // Asegura que ocupe todo el alto
    backgroundColor: '#282c34',
    borderRadius: 0, // Sin redondear los bordes
  },
  display: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#1e2126',
    padding: 20,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  },
  inputText: {
    color: '#61dafb',
    fontSize: 24,
  },
  resultText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#3a3f45',
    justifyContent: 'center',
    alignItems: 'center',
    width: '22%',
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  equalsButton: {
    backgroundColor: '#4caf50',
  },
  clearButton: {
    width: '100%',
    backgroundColor: '#f44336',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
});

export default App;
