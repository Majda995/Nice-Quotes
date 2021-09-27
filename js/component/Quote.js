import React, { Fragment } from "react";
import { Text } from "react-native"; // APIs und Komponenten
// Kein zustand Component als Funktion schreiben
export default function Quote(props) {
  const { text, author } = props; //destructuring
  //const text = this.props.text
  //const author = this.author.text
  return (
    <Fragment>
      <Text>{text}</Text>
      <Text>-- {author}</Text>
    </Fragment>
  );
}

/*
export default class Quote extends Component {
  render() {
    const { text, author} = this.props //destructuring
    //const text = this.props.text
     //const author = this.author.text
    return (
      <Fragment>
        <Text>{text}</Text>
        <Text>-- {author}</Text>
      </Fragment>
    );
  }
}
*/
