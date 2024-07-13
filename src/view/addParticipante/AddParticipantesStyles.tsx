import React from "react";
import { StyleSheet } from "react-native";

const AddParticipatesStyles = StyleSheet.create({
    header:{
        flex:2
    },
    body:{
        flex:3,
    },
    footer:{
        flex:1
    },
    buttons_options:{
        width:"30%",
        height:"20%",
        marginHorizontal:5,
    },
    menu_opition:{
        flexDirection:'row-reverse',
        alignContent:'space-between',
        flex:1,
        paddingHorizontal:15
    },
    button_Text:{
        flex:1,
        fontSize:10,
        color:"#A9A9A9",
        textAlignVertical:'center',
        textDecorationStyle:'solid',
        textAlign:'center',
        textTransform:'uppercase',
        textShadowRadius:30,
        textShadowColor:'#A9A9A9'
    },
    ScrowView:{
        flex:4,
        borderWidth:3,
        borderColor:"#A9A9A9",
    }
})
export default AddParticipatesStyles
