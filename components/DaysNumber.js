import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const DaysNumber = ({day}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {day}
            </Text>
        </View>
    );
};

export default DaysNumber;

const styles = StyleSheet.create({
    container: {
        width:25,
        height:25,
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:15,
        marginVertical:10,
        flexDirection: 'row',
        borderBottomWidth:1
    },

    text:{
        fontSize:20,
        textAlign:'center',
        fontFamily:'b-yekan'
    }

});
