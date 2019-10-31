import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class CardInfo extends Component {
  render() {
    return (
      <View style={styles.mainCard}>
        <View>
          <Text style = {styles.titleSeccion}>{this.props.seccion}</Text>
        </View>
        <View>
          <Text style={styles.conText}>{this.props.contenido}</Text>
        </View>
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  mainCard: {
    flexDirection: 'column',
    width: '95%',
    height: 'auto',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignSelf: "center",
    margin: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    elevation: 2,
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
    // infoCard: {
    //   flex: 0.7,
    //   padding: 10,
    //   justifyContent: 'space-around',
    // },
      campos:{
        color: '#888F94',
      },
      titleSeccion:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#888F94',
      },
      conText:{
        textAlign: 'justify',
      }
});
