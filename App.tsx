import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home/Home";
import Form from "./src/screens/Form/Form";

export default function App() {
  const [openForm, setOpenForm] = useState(true);

  return (
    <View style={styles.container}>
      {openForm === true ? <Form></Form> : <Home></Home>}
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
