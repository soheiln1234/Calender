import React,{useState} from 'react';
import { StyleSheet, Text, View,Dimensions,Image,ScrollView } from 'react-native';
import {StatusBar} from 'expo-status-bar';


import DaysOfWeek from '../components/DaysOfWeek';
import TopBar from '../components/TopBar';
import DateBar from '../components/DateBar';
import DaysNumber from '../components/DaysNumber';

let date = new Date();
const day=date.getDay();
const  currDate = date.getDate();
const year = date.getFullYear();
const  month = date.getMonth();

const fullDate = date.getFullYear()+' / '+date.getMonth()+' / '+date.getDate();
let fullClock=0;

const {width, height}=Dimensions.get("window");

const BoardScreen = () => {

    const [second,setSecond]=useState(0);
    const [minute,setMinute]=useState(0);
    const [hour,setHour]=useState(0);

    setInterval(() =>{
        newhr = new Date().getHours()
        newmin = new Date().getMinutes()
        newsec = new Date().getSeconds()
        setMinute(newmin);
        setHour(newhr);
        setSecond(newsec);
        fullClock=newhr+' : '+newmin+' : '+newsec
    },
    1000
    )

    return (
        <View style={styles.container}> 
            <StatusBar style="inverted"/>
            <TopBar/>
            <DateBar day={day} date={currDate} year={year}  month={month} />
            <View style={{width,backgroundColor:'#fff',flex:9}}>
                <DaysOfWeek/>
                <View style={{flexDirection:'row-reverse',width,height:20,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                </View>
                <View style={{flexDirection:'row-reverse',width,height:20,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                </View>
                <View style={{flexDirection:'row-reverse',width,height:20,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                </View>
                <View style={{flexDirection:'row-reverse',width,height:20,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                </View>
                <View style={{flexDirection:'row-reverse',width,height:20,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                </View>
                <View style={{flexDirection:'row-reverse',width,height:20,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                </View>
                <View style={{flexDirection:'row-reverse',width,height:20,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                    <DaysNumber day={day}/>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.1)',borderTopWidth:2,borderTopColor:'rgba(0,0,0,0.2)'}}>
                        <Text style={{textAlign:'center',fontSize:25,color:'rgba(0,0,0,0.8)'}}>
                            {fullDate}
                        </Text>
                        <Text style={{textAlign:'center',fontSize:15,color:'rgba(0,0,0,0.5)',marginTop:10}}>
                            {fullClock}
                        </Text>
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
