import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text,Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const {width,height} = Dimensions.get('window');

const WeatherGroup = {
    0: {
      icon: 'weather-sunny',
      colors:['#f5af19', '#f12711'],
    },
    2: {
      icon: 'weather-lightning',
      colors:['#ffe11c', '#919191'],
    },
    3: {
      icon: 'weather-rainy',
      colors:['#FFFFFF', '#6DD5FA', '#2980B9'],
    },
    5: {
      icon: 'weather-pouring',
      colors:['#00c6fb', '#005bea'],
    },
    6: {
      icon: 'weather-snowy',
      colors:['#7DE2FC', '#B9B6E5'],
    },
    7: {
      icon: 'weather-fog',
      colors:['#BDC3C7', '#2C3E50'],
    },
    8: {
      icon: 'weather-cloudy',
      colors:['#D7D2CC', '#304352'],
    }
  }

const Forecast = ({data}) => {

    const id = Math.floor(data.weather[0].id/100);
    const Weather = (id==800 ? WeatherGroup[0] : WeatherGroup[id]);

    return (
        <LinearGradient colors={Weather.colors} style={styles.container}>
            <MaterialCommunityIcons name={Weather.icon} size={100} style={styles.icon}/>
            <Text style={styles.bigText}>
                {data.weather[0].main}
            </Text>
            <Text style={styles.mainText}>
                {data.weather[0].description}
            </Text>
            <Text style={styles.bigText}>
                {Math.floor(data.main.temp-273.15)}ºC
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
  container: { 
      flex: 1,
      width: width,
      alignItems: 'center',
      justifyContent: 'center'
  },
  bigText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight:'600',
    margin: 10,
   },
    mainText: {
        fontSize: 16,
        textAlign: "center",
    },
});

export default Forecast;