import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
      <Text style={styles.titulo}>Tempo Divertido com o Sun</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.label}>Cidade: </Text>
      <TextInput
      placeholder='Hey amiguinho, diga sua cidade para descobrir o clima!'
      style={styles.input}
      />
    </View>
    <View style={styles.bloco}>
      <TouchableOpacity style={styles.bloco}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
});
