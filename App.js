import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,  } from 'react-native';

export default class App extends React.Component {

  state = {
    boyName: '',
    girlName: '',
    result: ''
  }

  boyNameChangedHandler = (value) => {
    this.setState({
      boyName : value
    });
  }

  girlNameChangedHandler = (value) => {
    this.setState({
      girlName : value
    });
  }

  flamesButtonClickHandler = () => {
    let {boyName, girlName} = this.state

    if(boyName.length > 0  && girlName.length > 0){
      alert(boyName + " vs " + girlName );

      let result = this.calculateFlames(boyName,girlName);

      this.setState({
        result: result
      });

    } else {
      alert ("Enter name to calculate flames!!!");
    }
  }


  calculateFlames = (str1, str2) => {

    const flames = ["Friends", "Love", "Affection", "Marraige", "Enemy", "Sibling"];

    const n = 3;
    while(flames.length ===1){

    }

    return flames.find();
  }

  render(){
    return (
      <View style={styles.container}>

      <Text>Boy Name:</Text>
        <TextInput
          style={{width:300, borderColor:"black", borderWidth:1}}
          value ={this.state.boyName}
          onChangeText={this.boyNameChangedHandler}
          placeholder= 'Enter the Boy Name'
        />

      <Text>Girl Name:</Text>
      <TextInput
          style={{width:300, borderColor:"black", borderWidth:1}}
          value ={this.state.girlName}
          onChangeText={this.girlNameChangedHandler}
          placeholder= 'Enter the Girl Name'
        />

      <Button title='Predict Flames' onPress={this.flamesButtonClickHandler} />

      <Text>Result:</Text>

      <Text style={{fontSize:50, color:"green"}}> {this.state.result} </Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
