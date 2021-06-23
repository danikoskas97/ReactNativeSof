import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Colors from "../constants/Colors";

export default function CartScreen(props) {
  return (
    <View style={styles.container}>
      <Text>RFFS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
});
