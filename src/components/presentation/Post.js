import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';


class Post extends Component {

  constructor(){
    super();
      this.state = {
        liked: false,
        screenWidth: Dimensions.get("window").width
      };
    }

    likeToggled(){
      this.setState({
        liked: !this.state.liked
      });
    }

        render(){

          const imageHeight = Math.floor(this.state.screenWidth * 1.1);
          const imageUri =
            "https://lh3.googleusercontent.com/FOTrawQ7bDldVKnazktwX6f4gnwMuVz0E5cL16lm0XjezNA3RHkICH-4iwf2Ev7x7uuM3tj6JVHECKbWGM6S0RRSXg" +
             "=s" +
            imageHeight +
            "-c";

            const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;


            return(
              <View style = {{flex : 1, width: 100 + "%"}}>

                    <View style={styles.userBar}>
                        <View style= {{flexDirection:"row", alignItems: "center"}}>

                                  <Image style= {styles.userPic} source={{ uri:
                                    'https://lh3.googleusercontent.com/NhnHagIIJj0E6zink1pI73j_tHl3YDUleSSSVXcsLcHzoKcai-VnhDXq3OzpN6oQEglU7COnoXyN5L2S0jFwS9Awqw=s1024'}}/>

                                        <Text style= {{marginLeft:10}}>poshspice3</Text>
                        </View>
                        <View style= {{alignItems:"center"}}>
                          <Text style= {{fontSize:26}}>...</Text>
                        </View>
                    </View>



                      <Image
                        style = {{ width: this.state.screenWidth, height: 400 }}
                        source = {{
                         uri: imageUri
                           }}
                      />



                      <View style = {styles.iconBar}>

                          <TouchableOpacity
                            onPress= {()=> {
                              this.likeToggled();
                            }}
                          >

                            <Image style={[styles.icon, { height:40, width: 40, tintColor: heartIconColor}]}
                             source= {config.images.heartIcon}
                             />


                         </TouchableOpacity>

                        <Image style={[styles.icon, { height:36, width: 36}]}
                        source= {config.images.bubbleIcon}
                        />


                        <Image style={[styles.icon, { height:35, width: 35}]}
                        source= {config.images.pmIcon}
                        />


                      </View>



                      <View style= {styles.iconBar}>

                      <Image style={[styles.icon, { height:20, width: 20, tintColor: heartIconColor}]}
                       source= {config.images.heartIcon}
                       />

                       <Text> 128 Likes </Text>

                      </View>


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

  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor:'rgb(233,233,233)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
   marginLeft: 5,
  }

});




export default Post;
