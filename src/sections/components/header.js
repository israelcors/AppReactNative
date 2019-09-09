import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

function Header(props){
    return(
        <View>
            <SafeAreaView>
                <View style={style.container}>
                    <Image 
                    source={require('../../../assets/logo.png')}
                    style={style.logo}
                    />
                </View>
                
                
                
            </SafeAreaView>
        </View>
    )
} 

const style= StyleSheet.create({
    logo:{
        width: 80,
        height: 26,
        resizeMode: 'contain',
    },
    container:{
        paddingVertical:10,
        paddingHorizontal:10,
    }
})
export default Header;