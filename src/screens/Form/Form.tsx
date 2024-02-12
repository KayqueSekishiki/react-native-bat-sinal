import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import bat from "../../../assets/pictures/bat.jpg";

import { styles } from "./styles";

export default function FormScreen(props: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("placeholder");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    toggleModal();
    if (handleError()) {
      setModalMessage("Por favor, corrija os erros no formulário.");
    } else {
      setModalMessage("Bat sinal enviado com SUCESSO!");
    }
  };

  const handleError = () => {
    let error = false;
    setErrorName("");
    setErrorEmail("");
    setErrorPhone("");
    setErrorMessage("");

    if (!name) {
      setErrorName("Por favor, insira o seu nome.");
      error = true;
    }

    if (!email) {
      setErrorEmail("Por favor, insira o seu email.");
      error = true;
    } else if (!email.includes("@")) {
      setErrorEmail("Por favor, insira um email válido.");
      error = true;
    }

    if (!phone) {
      setErrorPhone("Por favor, insira o seu telefone.");
      error = true;
    }

    if (!message) {
      setErrorMessage("Por favor, descreva a emergência.");
      error = true;
    }

    return error;
  };

  function handleModal() {
    toggleModal();
    if (!handleError()) props.toggleSignal();
  }

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <>
      {!modal && (
        <ScrollView style={styles.container}>
          <TouchableOpacity onPress={() => props.toggleSignal()}>
            <Image source={bat} style={styles.batLogo} resizeMode="contain" />
          </TouchableOpacity>

          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Digite o seu nome"
            placeholderTextColor="gray"
          />
          <Text style={styles.error}>{errorName}</Text>

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite o seu melhor email"
            keyboardType="email-address"
            placeholderTextColor="gray"
          />
          <Text style={styles.error}>{errorEmail}</Text>

          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Digite seu telefone"
            keyboardType="phone-pad"
            placeholderTextColor="gray"
          />
          <Text style={styles.error}> {errorPhone}</Text>

          <Text style={styles.label}>Qual a emergência?</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={message}
            onChangeText={setMessage}
            placeholder="Descreva a sua emergência"
            multiline
            numberOfLines={4}
            placeholderTextColor="gray"
          />
          <Text style={styles.error}>{errorMessage}</Text>

          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button}>Enviar Bat Sinal</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {modal && (
        <TouchableOpacity style={styles.modalContainer} onPress={handleModal}>
          <Text style={styles.modalMessage}>{modalMessage}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
