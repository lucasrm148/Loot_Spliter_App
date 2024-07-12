import React from "react";
import { Text, Pressable, View, StatusBar } from "react-native";
import { APP_name } from "../../constant/constants";
import { HomePageStyle } from './HomePage_Styles'
import {styles_button_grey_sobra as style_bgs} from "./../components/buttonsStyles/buttonStyles"
import GenerateColor from "../../controller/styles_componets/RandoColor";
import { useEffect } from "react";
const HomePage = () => {
  /*const[color,Changecolor] = React.useState('000000')
  useLayoutEffect(() =>{
    let numero = Math.random()*300
    console.log(numero)
    if(numero%4 == 0)
      Changecolor(GenerateColor(color))  
  },[])*/
  
  return (
    <View style={HomePageStyle.main}>
      <View style={HomePageStyle.header}>
        <Text style={[HomePageStyle.text_title]}>{APP_name} </Text>
      </View>
      <Text>{APP_name}</Text>
      <View style={HomePageStyle.EvetoCreateView}>
        <Pressable style={style_bgs(1)} onPress={()=>{console.log('here')}}>
          <View style={HomePageStyle.button_text_view}>
            <Text style={HomePageStyle.text_evento}>Criar Evento</Text>
          </View>
        </Pressable>
      </View>
      <View id ='order_buttons' style={HomePageStyle.buttonsView}>
        <Pressable style={[style_bgs(1),{marginHorizontal:15}]}>
          <View >
            <Text style={HomePageStyle.text_evento}>ajuda</Text>
          </View>
        </Pressable>
        <Pressable style={[style_bgs(1),{marginHorizontal:15}]}>
          <View >
            <Text style={HomePageStyle.text_evento}>Historico</Text>
          </View>
        </Pressable>
      </View>
      <View id="foother" style={HomePageStyle.footer}><Text style={{color:'green'}}>create_by:github@Lucasrm148</Text></View>
    </View>
  )
}
export default HomePage