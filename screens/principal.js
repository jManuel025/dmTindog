import React, {Component} from 'react';
import { StyleSheet,View , Text, Image, ScrollView,Dimensions, Animated, PanResponder, StatusBar, TouchableOpacity,FlatList} from 'react-native';
import styless from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Users = [
  { id: "1", uri: require('../images/dog.jpg') },
  { id: "2", uri: require('../images/dog.jpg') },
  { id: "3", uri: require('../images/dog.jpg') },
  { id: "4", uri: require('../images/dog.jpg') },
  { id: "5", uri: require('../images/dog.jpg') },
]
export default class principal extends Component {

  constructor() {

    super()
    
    this.subcription = null
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }
  componentWillMount() {
    
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }
  componentWillUnmount() {
    this.subcription.remove()
  }
  componentDidMount(){
    this._getUserDogs();
    this.subcription = this.props.navigation.addListener('didFocus', this._getUserDogs)
  }
  _getDogs = async() => {
    var token = await AsyncStorage.getItem('usertoken');
    
    var auth = 'Bearer ' + token;
    // Crea objeto headers
    var myheader = new Headers();
    myheader.append('Authorization', auth);
    myheader.append('Content-Type', 'application/json');
    myheader.append('Accept', 'application/json');

    try{
      fetch('https://tindog-api.herokuapp.com/api/v1/user/dogs/possibleMatches',{
        method: 'POST',
        headers: myheader,
      }).then((response) => response.json())
        .then((responseJson) => {
         
            console.log(responseJson);
            
          
        })
        .catch((error) => {
          console.log(error)
        })
    }
    catch(e){
      console.log(e);
    }
  }
  _getUserDogs = async() => {
    var token = await AsyncStorage.getItem('usertoken');
    var auth = 'Bearer ' + token;
    // Crea objeto headers
    var myheader = new Headers();
    myheader.append('Authorization', auth);

    try{
      fetch('https://tindog-api.herokuapp.com/api/v1/user/dogs/',{
        method: 'GET',
        headers: myheader,
      }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            cant: responseJson.count,
            dogs: responseJson.dogs,
          });
        })
        .catch((error) => {
          console.log(error)
        })
    }
    catch(e){
      console.log(e);
    }

  }
  
  renderUsers = () => {

    return Users.map((item, i) => {


      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 200, width: SCREEN_WIDTH - 10, padding: 0, position: 'absolute',marginLeft: -210,marginTop: 80, }]}>
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 2, borderColor: 'white', color: 'white', backgroundColor:'#429E34', fontSize: 42, fontWeight: '900', padding: 10, borderRadius: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 2, borderColor: 'white', color: 'white',backgroundColor:'#F40205', fontSize: 42, fontWeight: '900', padding: 10, borderRadius: 10 }}>NOPE</Text>

            </Animated.View>

            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />

          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 200, width: SCREEN_WIDTH, padding: 0, position: 'absolute',marginLeft: -210,marginTop: 80,
            }]}>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'white', color: 'white',backgroundColor:'green', fontSize: 42, fontWeight: '900', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'white', color: 'white',backgroundColor:'red', fontSize: 42, fontWeight: '900', padding: 10 }}>NOPE </Text>

            </Animated.View>

            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />

          </Animated.View>
        )
      }
    }).reverse()
  }





    render() {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
          <View style={styles.header}>
            {/* <ScrollView  > */}
              {/* <TouchableOpacity style = {{width: 65, height: 65, borderRadius: 200 / 2, marginTop: 12.5, marginBottom: 12.5,marginLeft:15, backgroundColor: '#FF3980DD', justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('formPerro')}>
                <Icon name='plus' color='#fff' size={15}/>
              </TouchableOpacity>
              <TouchableOpacity style = {{width: 70, height: 70, borderRadius: 200 / 2, marginTop: 10, marginBottom: 10, marginLeft:15, backgroundColor: '#FF3980DD', justifyContent: 'center', alignItems: 'center'}}>
                <View style = {{width: 65, height: 65, borderRadius: 200 / 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source = {require('../images/dog.jpg')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 62.5, height: 62.5, borderRadius: 200 / 2}}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style = {{width: 70, height: 70, borderRadius: 200 / 2, marginTop: 10, marginBottom: 10, marginLeft:15, backgroundColor: '#cbcbcb', justifyContent: 'center', alignItems: 'center'}}>
                <View style = {{width: 65, height: 65, borderRadius: 200 / 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source = {require('../images/dog.jpg')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 62.5, height: 62.5, borderRadius: 200 / 2}}
                  />
                </View>
              </TouchableOpacity> */}
              {this.state.cant <= 0 ?
              <Text style={styles.mensajes}>Aún no has registrado ningun perro</Text>
              :
              <View >
                <FlatList
                  horizontal
                  data = {this.state.dogs}
                  keyExtractor = {(item, index) => item._id}
                  renderItem = {({item}) => (
                    <TouchableOpacity style = {{width: 70, height: 70, borderRadius: 200 / 2, marginTop: 10, marginBottom: 10, marginLeft:15, backgroundColor: '#FF3980DD', justifyContent: 'center', alignItems: 'center'}}>
                      <View style = {{width: 65, height: 65, borderRadius: 200 / 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                          source = {require('../images/dog.jpg')}
                          //borderRadius style will help us make the Round Shape Image
                          style={{ width: 62.5, height: 62.5, borderRadius: 200 / 2}}
                        />
                        
                      </View>
                      <Text style={{position:"absolute",color:"#FF3980",fontWeight:"bold",fontSize:14,top:70}}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            }
            {/* </ScrollView> */}
          </View>
          <View style={styles.center}>
            {this.renderUsers()}
          </View>
          {/* <View style={styles.footer}>
          
          </View> */}
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    
  },
  header:{
    width:"100%",
    height:110,
    flexDirection:"row",
    // borderTopColor:"#fff",
    // borderTopWidth:.5,
    borderBottomWidth: 1,
    borderBottomColor:"#e3e3d3",
  },
  center:{
    alignItems: 'center',
    marginTop:-52.5,
    // marginLeft:10,
    // marginRight: -8,
    // flex: 1,
  },
  // footer:{
  //   height:60,
  // }
});