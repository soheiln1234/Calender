import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';


import Calendar from '../assets/svgs/Calendar';

const {width, height}=Dimensions.get("window");


const getMonthPersian=(month)=> {
    switch (Math.abs(month-1)){
        case 1: return 'فروردین'
        case 2: return 'اردیبهشت'
        case 3: return 'خرداد'
        case 4: return 'تیر'
        case 5: return 'مرداد'
        case 6: return 'شهریور'
        case 7: return 'مهر'
        case 2: return 'آبان'
        case 3: return 'آذر'
        case 4: return 'دی'
        case 5: return 'بهمن'
        case 6: return 'اسفند'
    }

}
const getMonthEnglish=(month)=> {
    switch (month){
        case 1: return 'January'
        case 2: return 'February'
        case 3: return 'March'
        case 4: return 'April'
        case 5: return 'May'
        case 6: return 'June'
        case 7: return 'July'
        case 8: return 'August'
        case 9: return 'September'
        case 10: return 'October'
        case 11: return 'November'
        case 12: return 'December'
    }

}

const getDay=(day)=> {
    switch (Math.abs(day-5)){
        case 1: return 'شنبه'
        case 2: return 'یک شنبه'
        case 3: return 'دوشنبه'
        case 4: return 'سه شنبه'
        case 5: return 'چهارشنبه'
        case 6: return 'پنج شنبه'
        case 7: return 'جمعه'
    }

}

const DateBar = ({day,month,year,date}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row-reverse'}}>
                    <Text style={styles.textRtl}>
                        {
                            getMonthPersian(month)
                        }
                    </Text>
                    <Text style={styles.textRtl}>
                        {
                            year-621
                        }     
                    </Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text  style={{fontSize:12,textAlign:'center',color:'white'}}>
                        {
                            date
                        }
                    </Text>
                    <Text  style={{fontSize:12,textAlign:'center',color:'white',marginHorizontal:5}}>
                        {
                            getMonthEnglish(month+1)
                        }
                    </Text>
                    <Text  style={{fontSize:12,textAlign:'center',color:'white'}}>
                        {
                            year
                        }
                    </Text>
                </View>
            </View>
            <Calendar  day={date-21} style={styles.calendarIc}/>
            <View style={{flexDirection:'column',marginRight:10}}>
                <Text style={styles.textRtl}>
                    {
                        getDay(day)
                    }
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
        fontFamily:'b-yekan',
        marginHorizontal:5
    },
    calendarIc:{
        marginLeft:35,
        alignSelf:'center',
        marginRight:25
    }

});
