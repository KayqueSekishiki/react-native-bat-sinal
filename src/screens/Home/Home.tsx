import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import bat from "../../../assets/pictures/bat.jpg";
import { styles } from "./styles";

export default function HomeScreen(props: any) {
  return (
    <View style={styles.container}>
      <Image source={bat} style={styles.batLogo} resizeMode="contain" />
      <View>
        <TouchableOpacity onPress={() => props.toggleSignal()}>
          <Text style={styles.button}>Activate Bat Signal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
