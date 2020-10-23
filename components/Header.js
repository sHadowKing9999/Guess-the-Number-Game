import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Colors from '../constants/colors';
const Header = props =>{
 return(<View style={styles.title}>
     <Text style={styles.titleheader}>{props.title}</Text>
 </View>)
};

const styles= StyleSheet.create({
    title:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    titleheader:{
        color:'black',
        fontSize:18
    }
});
export default Header;