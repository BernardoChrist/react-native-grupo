import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function CreateMusic({
  novaMusica,
  setNovaMusica,
  autor,
  setAutor,
  genero,
  setGenero,
  cadastrar,
  buscarPorGenero,
}) {
  const [filtroGenero, setFiltroGenero] = useState("");

  const handleCadastrar = () => {
    if (!novaMusica || !autor || !genero) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }

    cadastrar();
  };

  const handleBuscarPorGenero = () => {
    buscarPorGenero(filtroGenero);
  };

  return (
    <View>
      <Text>Adicione sua música</Text>
      <View>
        <TextInput
          value={novaMusica}
          onChange={(e) => setNovaMusica(e)}
          placeholder="Nome da música"
        />
        <TextInput
          value={autor}
          onChange={(e) => setAutor(e)}
          placeholder="Autor"
        />
        <TextInput
          value={genero}
          onChange={(e) => setGenero(e)}
          placeholder="Genero"
        />
        <TouchableOpacity onPress={handleCadastrar}>
          <Text>Adionar Música</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Filtrar por gênero</Text>
        <TextInput
          value={filtroGenero}
          onChange={(e) => setFiltroGenero(e)}
          placeholder="Digite o gênero da música"
        />
        <TouchableOpacity onPress={handleBuscarPorGenero}>
          <Text>Buscar por Gênero</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
