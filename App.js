import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native"; // APIs und Komponenten
import Quote from "./js/component/Quote";

const data = [
  {
    text: "Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.",
    author: "Albert Einstein",
  },
  {
    text: "Man braucht nichts im Leben zu fürchten, man muss nur alles verstehen",
    author: "Marie Curie",
  },
  {
    text: "Nichts ist so beständig wie der Wandel",
    author: "Heraklit",
  },
];
// Deklaration einer Komponente
export default class App extends Component {
  state = { index: 0 }; // initialer Zustand
  // render: Darstellung der komponenten im UI
  render() {
    let index = this.state.index;
    const quote = data[index];
    let nextIndex = index + 1;
    let prevIndex = index - 1;
    if (nextIndex === data.length) nextIndex = 0;
    if (prevIndex === -1) prevIndex = data.length - 1;
    return (
      // JSX
      <View style={styles.container}>
        <Quote text={quote.text} author={quote.author} />
        <Button
          title="Nächstes Zitat"
          onPress={() => this.setState({ index: nextIndex })}
        />
        <Button
          title="Voriges Zitat"
          onPress={() => this.setState({ index: prevIndex })}
        />
      </View>
    );
  }
}

// Styles für Aussehen und Layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // CSS: Background-Color
    alignItems: "center",
    justifyContent: "center",
  },
});
