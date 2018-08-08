import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native'



class Register extends Component {


  constructor(){
    super();
    this.state = {
      credentials: {
        login: "",
        password: ""
      }
    };

  }

  updateText(text, field){
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({

      credentials: newCredentials
    });
  }


  register() {
    //send credtials to server
    // if signup success
    this.props.navigation.navigate('main');
    alert(JSON.stringify(this.state.credentials));
    //else error message
  }




  render (){
      return (
        <View
          style = {{
            height:100 + '%',
            width:100 + '%',
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(252,252,200)"
          }}
        >
        <Text> LOGIN PAGE </Text>

        <TextInput
        value= {this.state.login}
        onChangeText={text => this.updateText(text, 'login')}
        autoCorrect= {false}
        placeholder="Username"style={styles.input}/>

        <TextInput
        value= {this.state.password}
        onChangeText={text => this.updateText(text, 'password')}
        autoCorrect= {false}
        secureTextEntry placeholder="Password" style={styles.input}/>

        <Button
        onPress={() => {
          this.register();
        }}
        title="Signup"
        />
        </View>



      );
  }


}


const styles = StyleSheet.create({
  input: {
    height:50,
    width: 100 + "%",
    backgroundColor: "rgb(255,255,255)",
    marginBottom: 10

  }
})

export default Register;
