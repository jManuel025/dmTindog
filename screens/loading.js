import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class loading extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this._verifySession();
    }

    _verifySession = async () => {
        try {
            const session = await AsyncStorage.getItem('usertoken');
            if(session){
                this.props.navigation.navigate('app');
            }
            else{
                this.props.navigation.navigate('login');
            }
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <ActivityIndicator/>
            </View>
        );
    }
}