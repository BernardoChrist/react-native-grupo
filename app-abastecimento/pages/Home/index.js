import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import ActionModal from "../../components/ActionModal";

export default function Home() {
  const [precoAlcool, setPrecoAlcool] = useState("");
  const [precoGasolina, setPrecoGasolina] = useState("");
  const [resultado, setResultado] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const calcular = () => {
    if (precoAlcool && precoGasolina) {
      const resultadoCalculo =
        parseFloat(precoAlcool) / parseFloat(precoGasolina);

      if (resultadoCalculo < 0.7) {
        setResultado("Compensa usar álcool!");
      } else {
        setResultado("Compensa usar gasolina!");
      }

      setMostrarModal(true);
    }
  };

  const calcularNovamente = () => {
    setPrecoAlcool("");
    setPrecoGasolina("");
    setMostrarModal(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/gasolina1.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <Text>Álcool (preço por litro)</Text>
      <TextInput
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        value={precoAlcool}
        onChangeText={(text) => setPrecoAlcool(text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
      />
      <Text>Gasolina (preço por litro)</Text>
      <TextInput
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={precoGasolina}
        onChangeText={(text) => setPrecoGasolina(text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
      />
      <TouchableOpacity onPress={calcular}>
        <Text style={styles.title}>Calcular</Text>
      </TouchableOpacity>
      <Modal visible={mostrarModal} transparent={true}>
        <ActionModal
          calcularNovamente={calcularNovamente}
          resultado={resultado}
          precoAlcool={precoAlcool}
          precoGasolina={precoGasolina}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
