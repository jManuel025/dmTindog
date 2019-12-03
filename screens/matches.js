import React, {Component} from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'


const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]
export default class matches extends Component {
  render() {
    return (
      <View>
        <View>
          <View style={styles.header}>
            <Text style={styles.texto}>Mis matches</Text>
            {/* <TouchableOpacity style = {styles.back} onPress = {() => {this.props.navigation.navigate('perfilUsuario')}}>
                <Icon name='long-arrow-left' color='#fff' size={20}/>
            </TouchableOpacity> */}
          </View>
        </View>
        <View>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                bottomDivider
              />
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto:{
    fontSize: 15,
  }
})