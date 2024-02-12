import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import bat from "../../../assets/pictures/bat.jpg";

import { styles } from "./styles";

export default function FormScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={bat} style={styles.batLogo} resizeMode="contain" />
      </TouchableOpacity>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
        placeholderTextColor="gray"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
        placeholderTextColor="gray"
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Digite seu phone"
        keyboardType="phone-pad"
        placeholderTextColor="gray"
      />

      <Text style={styles.label}>Qual a emergência?</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={message}
        onChangeText={setMessage}
        placeholder="Descreva a emergência"
        multiline
        numberOfLines={4}
        placeholderTextColor="gray"
      />

      <TouchableOpacity>
        <Text style={styles.button}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
