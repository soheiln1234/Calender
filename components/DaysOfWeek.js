import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

const {width, height}=Dimensions.get("window");


const DaysOfWeek = () => {
    return (
            <View style={styles.container}>
                <Text style={{...styles.day,marginRight:5}}>
                    شنبه
                </Text>
                <Text style={styles.day}>
                    یک شنبه
                </Text>
                <Text style={styles.day}>
                    دوشنبه
                </Text>
                <Text style={styles.day}>
                    سه شنبه
                </Text>
                <Text style={styles.day}>
                    چهارشنبه
                </Text>
                <Text style={styles.day}>
                    پنج شنبه
                </Text>
                <Text style={{...styles.day,marginLeft:5}}>
                    جمعه
                </Text>
            </View>
    );
};

export default DaysOfWeek;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row-reverse',
        width,
        height:width*0.1,
        backgroundColor:'#fff',
        justifyContent:'space-around',
        alignItems:'center',
    },
    day:{
        fontSize:13,
        textAlign:'center',
        fontFamily:'b-yekan',
        color:'black'
    }

});
