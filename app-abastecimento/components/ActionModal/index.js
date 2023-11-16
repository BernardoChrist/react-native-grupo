import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function ActionModal({
  calcularNovamente,
  resultado,
  precoAlcool,
  precoGasolina,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImage}>
        <Image
          source={require("../../assets/gasolina2.png")}
          style={{ width: 125, height: 125 }}
        />
      </View>
      <View style={styles.viewTitulo}>
        <Text style={styles.titulo}>{resultado}</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.subtitulo}>Com os preços:</Text>
        <Text style={styles.textos}>Álcool: R$ {precoAlcool}</Text>
        <Text style={styles.textos}>Gasolina: R$ {precoGasolina}</Text>

        <TouchableOpacity onPress={calcularNovamente} style={styles.botao}>
          <Text style={styles.textoBotao}>Calcular Novamente</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#8D1111",
    alignItems: "center",
    width: "100%",
  },
  viewImage: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 25,
    width: 200,
    height: 200,
    borderWidth: 10,
    borderRadius: 100,
    backgroundColor: "#FFFDFD",
  },

  titulo: {
    color: "#FFFDFD",
    fontSize: 28,
    fontWeight: "bold",
  },

  viewTitulo: {
    backgroundColor: "black",
    marginBottom: 25,
    padding: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFDFD",
    borderRadius: 30,
  },

  main: {
    backgroundColor: "#FFFDFD",
    width: 300,
    padding: 30,
    borderRadius: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  inputsMain: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
  },

  textos: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  subtitulo: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: "bold",
  },

  botao: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#8D1111",
    width: 170,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 20,
  },

  textoBotao: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
