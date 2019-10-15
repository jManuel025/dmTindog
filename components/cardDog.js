import React, {Component} from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.mainCard}>
        <View style={styles.imageCard}>
          <Image source = {this.props.imageUri} style = {styles.dogPhoto}/>
        </View>
        <View style={styles.infoCard}>
          <Text style = {styles.campos}>Nombre: </Text>
          <Text style = {styles.campos}>Raza: </Text>
          <Text style = {styles.campos}>Edad: </Text>
        </View>
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  mainCard: {
    flexDirection: 'row',
    width: '95%',
    height: 125,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignSelf: "center",
    margin: 5,
  },
    imageCard: {
      flex: .3,
    },
      dogPhoto: {
        height: 125,
        width: 'auto',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
    infoCard: {
      flex: 0.7,
      padding: 10,
      justifyContent: 'space-around',
    },
      campos:{
        color: '#888F94',
      }
});
