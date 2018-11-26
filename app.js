import React from "react";
import ReactDOM from "react-dom";
import { Button, Autocomplete, TextInput } from "evergreen-ui";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAzjyVetlhL-aSALC1CLzKqnpAOIDNQQ60",
  authDomain: "fikrachat-4cb5b.firebaseapp.com",
  databaseURL: "https://fikrachat-4cb5b.firebaseio.com",
  projectId: "fikrachat-4cb5b",
  storageBucket: "fikrachat-4cb5b.appspot.com",
  messagingSenderId: "129439978196"
};

firebase.initializeApp(config);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      item: []
    };

    firebase
      .firestore()
      .collection("drugs")
      .onSnapshot(snapshot => {
        let drug = [];
        snapshot.forEach(doc => {
          drug.push(doc.data());
        });

        this.setState({
          item: item
        });
      });
  }
  render() {
    return (
      <div>
        <Autocomplete
          title="Drug"
          onChange={changedItem => console.log(changedItem)}
          items={[this.state.item]}
        >
          {props => {
            const { getInputProps, getRef, inputValue } = props;
            return (
              <TextInput
                placeholder="Select A Drug"
                value={inputValue}
                innerRef={getRef}
                {...getInputProps()}
              />
            );
          }}
        </Autocomplete>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
