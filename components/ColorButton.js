import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function ColorButton({ color, onColorChange }) {
  return (
    <View style={styles.button}>
      <Button
        color={color}
        title={color}
        onPress={() => onColorChange(color)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10
  }
});
