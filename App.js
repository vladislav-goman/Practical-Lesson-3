import React, { PureComponent } from "react";
import { StyleSheet, Text, View, FlatList, Alert, Button } from "react-native";
import ColorButton from "./components/ColorButton";

export default class App extends PureComponent {
  state = {
    currentColor: "white"
  };

  setCurrentColor = newColor => {
    this.setState({ currentColor: newColor });
  };

  componentDidUpdate(prevProps, prevState) {
    Alert.alert(
      `Hello ${this.state.currentColor}!`,
      `Color was changed from ${prevState.currentColor} to ${this.state.currentColor}.`,
      [{ text: "OK" }],
    );
  }

  _colors = [
    "aqua",
    "blueviolet",
    "chocolate",
    "crimson",
    "mistyrose",
    "forestgreen",
    "gold",
    "tomato",
    "thistle",
    "royalblue",
    "rebeccapurple",
    "plum",
    "orchid",
    "white",
    "orange",
    "black",
    "red",
    "papayawhip"
  ];

  alertAboutDeveloper = () => {
    Alert.alert(
      `This app was developed by Vlad`,
      `Yeah that is 100% true. Vlad is a young web developer. Now he is trying his hand is React Native development.`,
      [{ text: "Got it" }],
    );
  };

  render() {
    const { currentColor } = this.state;
    const { _colors, setCurrentColor, alertAboutDeveloper } = this;

    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: currentColor
        }}
      >
        <Text style={styles.header}>
          Practical lesson 3. Working with buttons
        </Text>
        <View style={styles.colorsContainer}>
          <FlatList
            data={_colors}
            keyExtractor={item => item}
            renderItem={dataItem => (
              <ColorButton
                color={dataItem.item}
                onColorChange={setCurrentColor}
              />
            )}
          />
        </View>
        <Button title="Developer Info" onPress={alertAboutDeveloper} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: "flex-start"
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "white"
  },
  colorsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 80,
    flex: 1
  }
});
