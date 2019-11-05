import React, {Component} from 'react';
import { StyleSheet,View , Text, Image, ScrollView,Dimensions, Animated, PanResponder} from 'react-native';
import styless from '../styles/globalStyles';
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

  renderUsers = () => {

    return Users.map((item, i) => {


      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 225, width: SCREEN_WIDTH, padding: 0, position: 'absolute',marginLeft: -210,marginTop: 80, }]}>
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'white', color: 'white',backgroundColor:'green', fontSize: 42, fontWeight: '900', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'white', color: 'white',backgroundColor:'red', fontSize: 42, fontWeight: '900', padding: 10 }}>NOPE </Text>

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
              height: SCREEN_HEIGHT - 225, width: SCREEN_WIDTH, padding: 0, position: 'absolute',marginLeft: -210,marginTop: 80,
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
            <View style={styles.header}>
            <ScrollView  horizontal={true}>
            <Image
             source = {require('../images/dog.jpg')}
              //borderRadius style will help us make the Round Shape Image
              style={{ width: 75, height: 75, borderRadius: 200 / 2,marginTop:21,marginLeft:15, }}
            />
            <Image
             source = {require('../images/dog.jpg')}
              //borderRadius style will help us make the Round Shape Image
              style={{ width: 75, height: 75, borderRadius: 200 / 2,marginTop:21,marginLeft:15}}
            />
            <Image
             source = {require('../images/dog.jpg')}
              //borderRadius style will help us make the Round Shape Image
              style={{ width: 75, height: 75, borderRadius: 200 / 2,marginTop:21, marginLeft:15}}
            />
            <Image
             source = {require('../images/dog.jpg')}
              //borderRadius style will help us make the Round Shape Image
              style={{ width: 75, height: 75, borderRadius: 200 / 2,marginTop:21, marginLeft:15}}
            />
            <Image
             source = {require('../images/dog.jpg')}
              //borderRadius style will help us make the Round Shape Image
              style={{ width: 75, height: 75, borderRadius: 200 / 2,marginTop:21, marginLeft:15}}
            />
            <Image
             source = {require('../images/dog.jpg')}
              //borderRadius style will help us make the Round Shape Image
              style={{ width: 75, height: 75, borderRadius: 200 / 2,marginTop:21, marginLeft:15}}
            />
            
            
            </ScrollView>
            </View>
            <View style={styles.center}>
            {this.renderUsers()}
            </View>
            <View style={styles.footer}>
            
            </View>
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
    borderTopColor:"#e3e3d3",
    borderTopWidth:2,
    borderBottomWidth:1,
    borderBottomColor:"#e3e3d3",
  },
  center:{
    marginTop:-45,
    marginLeft:8,
    flex: 1,
  },
  footer:{
    height:60,
  }
});