import React,{useState} from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


import BoardScreen from './screens/BoardScreen';

const fetchFonts=()=>{
  return Font.loadAsync({
    'b-yekan':require('./assets/fonts/Yekan.ttf'),
  });
};

export default function App() {
  
  // State of font loading
  const [fontLoaded,setFontLoaded]=useState(false);

  // Loading custom fonts
  if(!fontLoaded){
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  };


  return (
    <BoardScreen/>
  );
};
