import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';


import Calendar from '../assets/svgs/Calendar';

const {width, height}=Dimensions.get("window");


const DateBar = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.textRtl}>
                    اردیبهشت 1400      
                </Text>
                <Text  style={{fontSize:12,textAlign:'center',color:'white'}}>
                    13 May 2021
                </Text>
            </View>
            <Calendar style={styles.calendarIc}/>
            <View style={{flexDirection:'column',marginRight:10}}>
                <Text style={styles.textRtl}>
                    پنج شنبه
                </Text>
                <Text  style={{...styles.textRtl,fontSize:12}}>
                    1442 شوال 1
                </Text>
            </View>
        </View>
    );
};

export default DateBar;

const styles = StyleSheet.create({
    container: {
        width,
        backgroundColor:'#2B3763',
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:2,
        borderBottomColor:"rgba(255,255,255,0.2)"
    },

    textRtl:{
        fontSize:20,
        textAlign:'center',
        color:'white',
        writingDirection:'rtl',
        fontFamily:'b-yekan'
    },
    calendarIc:{
        marginLeft:35,
        alignSelf:'center',
        marginRight:25
    }

});
