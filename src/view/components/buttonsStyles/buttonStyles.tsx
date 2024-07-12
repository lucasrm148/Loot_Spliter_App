import { StyleSheet } from "react-native";

export const styles_button_grey_sobra = (flexV=1) =>{
    let style = StyleSheet.create({
        container:{
          flex:flexV,
          width:"auto",
          height:"auto",
          backgroundColor:"#1C1C1C",
          borderColor:"#A9A9A9",
          borderWidth:1.45,
          borderEndWidth:2.5,
          borderBottomWidth:4,
          borderRadius:80,
          alignItems:'center',
          flexDirection:'column',
          alignContent:'center',

        }
    })
    return style.container
}