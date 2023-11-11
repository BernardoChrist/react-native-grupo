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
  const [textinho, setTextinho] = useState("");

  const calcularIMC = () => {
    // formula do IMC - temos que fazer um parseFloat pq estamos recebendo em String
    if (peso && altura) {
      const alturaEmMetro = parseFloat(altura) / 100; //colocando a altura para metros
      const imc = parseFloat(peso) / Math.pow(alturaEmMetro, 2);

      setResultado("Seu IMC é: " + imc.toFixed(2) + " Kg/m^2");
      setAltura(null);
      setPeso(null);
      setBotao("Novo Calculo");

      if (imc < 18.5) {
        setTextinho("Você está abaixo do peso");
      } else if (imc < 24.9) {
        setTextinho("Você está no peso normal");
      } else if (imc < 29.9) {
        setTextinho("Você está acima do peso");
      } else if (imc > 30) {
        setTextinho("Você está obeso");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textoPrincipal}>
        <Text style={styles.text}>Preencha a altura e o peso</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Altura em centimetros"
        value={altura}
        onChangeText={(text) => setAltura(text)}
        placeholderTextColor="#3D3A3A"
        placeholderStyle={{ fontSize: 20, fontStyle: "italic" }}
        keyboardType="decimal-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={peso}
        onChangeText={(text) => setPeso(text)}
        placeholderTextColor="#3D3A3A"
        placeholderStyle={{ fontSize: 20, fontStyle: "italic" }}
        keyboardType="decimal-pad"
      />
      <TouchableOpacity style={styles.addButton} onPress={calcularIMC}>
        <Text style={styles.buttonText}>{botao}</Text>
      </TouchableOpacity>
      <View style={styles.resultado}>
        <Text style={styles.textoresult}>{resultado}</Text>
        <Text style={styles.textoresult}>{textinho}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 25,
  },

  textoPrincipal: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
  },

  input: {
    height: 60,
    borderColor: "#3D3A3A",
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 25,
    paddingHorizontal: 12,
  },
  addButton: {
    backgroundColor: "#003376",
    padding: 10,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 16,
    height: 45,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  item: {
    backgroundColor: "#033B86",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 15,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#033B86",
    height: 55,
  },
  textoresult: {
    color: "#003376",
    fontSize: 22,
    height: 40,
  },
  resultado: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    padding: 20,
    backgroundColor: "#3498db",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#033B86",
  },
});
