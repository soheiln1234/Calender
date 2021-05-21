import React from 'react'
import { StyleSheet, View,Dimensions } from 'react-native'
import { Entypo,Ionicons,MaterialIcons,AntDesign } from '@expo/vector-icons';

const {width, height}=Dimensions.get("window");

const TopBar = () => {
    return (
        <View style={styles.container}>
            <Entypo style={{...styles.icon,marginLeft:10}} name="dots-three-vertical" size={22} color="white" />
            <Ionicons style={styles.icon} name="mail-outline" size={22} color="white" />
            <MaterialIcons style={styles.icon} name="support-agent" size={22} color="white" />
            <AntDesign style={styles.icon} name="clockcircleo" size={20} color="white" />
            <MaterialIcons style={{marginTop:25,marginLeft:width-250}} name="menu" size={24} color="white" />
        </View>
    )
}

export default TopBar;

const styles = StyleSheet.create({
    container: {
        width,
        backgroundColor:'#32437D',
        flex:1.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'rgba(255,255,255,0.5)',
        borderBottomWidth:1
    },
    icon:{
        marginTop:25,
        marginLeft:30
    }

});
