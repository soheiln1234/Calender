import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';
import {StatusBar} from 'expo-status-bar';


import DaysOfWeek from '../components/DaysOfWeek';
import TopBar from '../components/TopBar';
import DateBar from '../components/DateBar';
import DaysNumber from '../components/DaysNumber';


const {width, height}=Dimensions.get("window");

const days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

const BoardScreen = () => {
    return (
        <View style={styles.container}> 
            <StatusBar style="inverted"/>
            <TopBar/>
            <DateBar/>
            <View style={{width,backgroundColor:'#fff',flex:9}}>
                <DaysOfWeek/>
                <View style={{flex:1,flexDirection:'row-reverse'}}>
                    {
                        days.map((day, i) =>{
                            return (
                                    <DaysNumber day={day} key={i} />
                            )
                        })
                    }
                </View>
            </View>
        </View>
    );
};

export default BoardScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
});
