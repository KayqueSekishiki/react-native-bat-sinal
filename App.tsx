import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home/Home";
import Form from "./src/screens/Form/Form";

export default function App() {
  const [openForm, setOpenForm] = useState(false);

  function toggleSignal() {
    setOpenForm(!openForm);
  }

  return (
    <View style={styles.container}>
      {openForm === true ? (
        <Form toggleSignal={toggleSignal}></Form>
      ) : (
        <Home toggleSignal={toggleSignal}></Home>
      )}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
