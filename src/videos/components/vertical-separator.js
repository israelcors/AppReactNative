import React from 'react';
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native';

function verticalSeparator(props){
    return(
        <View style={[
            styles.separator,
            {
                borderTopColor: (props.color) ? props.color:'#eaeaea' 
            }]}> 
        </View>         
    )
}

const styles = StyleSheet.create({
    separator : {
        borderTopWidth: 1,
    }
})
export default verticalSeparator;