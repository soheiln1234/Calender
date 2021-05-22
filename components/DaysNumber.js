import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

const {width, height}=Dimensions.get("window");


const DaysNumber = ({day}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {day}
            </Text>
        </View>
    )
};

export default DaysNumber;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        marginBottom:10
    },

    text:{
        fontSize:20,
        textAlign:'center',
        fontFamily:'b-yekan',
        marginHorizontal:width/18,
        alignSelf:'center'
    }

});
