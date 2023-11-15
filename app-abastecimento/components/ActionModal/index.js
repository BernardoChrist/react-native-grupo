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
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}
      >
        <Image
          source={require("../../assets/gasolina2.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ color: "#000", backgroundColor: "#d9d9d9" }}>
          {resultado}
        </Text>
        <Text>Com os preços:</Text>
        <Text>Álcool: R$ {precoAlcool}</Text>
        <Text>Gasolina: R$ {precoGasolina}</Text>

        <TouchableOpacity onPress={calcularNovamente}>
          <Text style={{ color: "#000" }}>Calcular Novamente</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
