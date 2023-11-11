import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function Main() {
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [resultado, setResultado] = useState(null);

  const [botao, setBotao] = useState("Calcular");

  const calcularIMC = () => {
    // formula do IMC - temos que fazer um parseFloat pq estamos recebendo em String
    if (peso && altura) {
      const imc = parseFloat(peso) / Math.pow(parseFloat(altura), 2);

      setResultado("Seu IMC é: " + imc.toFixed(2) + " Kg/m^2");
      setAltura(null);
      setPeso(null);
      setBotao("Novo Calculo");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preencha a altura e o peso</Text>
      <TextInput
        style={styles.input}
        placeholder="Altura"
        value={altura}
        onChangeText={(text) => setAltura(text)}
        // keyboardType="decimal-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={peso}
        onChangeText={(text) => setPeso(text)}
        // keyboardType="decimal-pad"
      />
      <TouchableOpacity style={styles.addButton} onPress={calcularIMC}>
        <Text style={styles.buttonText}>{botao}</Text>
      </TouchableOpacity>
      <Text style={styles.textoresult}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 25,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 16,
    height: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 15,
  },
  text: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  textoresult: {
    color: "black",
    fontSize: 20,

    height: 40,
  },
});
