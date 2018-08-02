import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


class PoshApp extends Component {

        render(){
            return(
                <View style= {{flex:1, width:100 + "%", height: 100 + "%" }}>

                    <View style={styles.tempNav}>
                      <Text>Posh</Text>
                    </View>

                    <View style={styles.userBar}>
                        <View style= {{flexDirection:"row", alignItems: "center"}}>

                                  <Image style= {styles.userPic} source={{ uri:
                                    'https://lh3.googleusercontent.com/NhnHagIIJj0E6zink1pI73j_tHl3YDUleSSSVXcsLcHzoKcai-VnhDXq3OzpN6oQEglU7COnoXyN5L2S0jFwS9Awqw=s1024'}}/>

                                        <Text style= {{marginLeft:10}}>Matt Roling </Text>
                        </View>
                        <View style= {{alignItems:"center"}}>
                          <Text style= {{fontSize:26}}>...</Text>
                        </View>
                    </View>
                    <View/>
                    <Image
                      source = {{
                       uri:
                         'https://lh3.googleusercontent.com/FOTrawQ7bDldVKnazktwX6f4gnwMuVz0E5cL16lm0XjezNA3RHkICH-4iwf2Ev7x7uuM3tj6JVHECKbWGM6S0RRSXg=s1024'}}
                       style= {{width:100 + "%", height: 100 }} />

                </View>

            );
        }
}


const styles = StyleSheet.create({
  tempNav:{
    width:100+ "%",
    height: 50,
    marginTop:20,
    backgroundColor:'rgb(250,250,250)',
    borderBottomColor:'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent:"center",
    alignItems: "center"
  },
  userBar:{
    width:100+'%',
    height: 50,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic:{
    height:40,
    width:40,
    borderRadius:20

  }


})




export default PoshApp;
