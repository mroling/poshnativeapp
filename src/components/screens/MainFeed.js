import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';
import {PostFeed} from '../container';

class PoshApp extends Component {


        render(){

            return(
                <View style= {{flex:1, width:100 + "%", height: 100 + "%" }}>

                    <View style={styles.tempNav}>
                      <Text>Posh</Text>




                    </View>

                    <PostFeed />

                </View>

            );
        }
}


const styles = StyleSheet.create({
  tempNav:{
    width:100+ "%",
    height: config.styleConstants.rowHeight,
    marginTop:20,
    backgroundColor:'rgb(250,250,250)',
    borderBottomColor:'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent:"center",
    alignItems: "center"
  }
});




export default PoshApp;
