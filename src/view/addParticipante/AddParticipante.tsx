import React, { useState, useEffect } from "react";
import { View, Pressable, Text, ScrollView } from "react-native";
import { participante } from "./../../model/participantes"
import { modificador } from "./../../model/modificadores"
import { HomePageStyle } from "../homePage/HomePage_Styles";
import { styles_button_grey_sobra } from './../components/buttonsStyles/buttonStyles'
import AddParticipatesStyles from "./AddParticipantesStyles";
const AddParticipante = () => {
    const [participantes, OnChangeParticipantes] = useState(Array<participante>)
    const [modificadores, OnChangeModificadores] = useState(Array<modificador>)
    return (
        <View id='main' style={HomePageStyle.main}>
            <View id='header' style={AddParticipatesStyles.header}>
                <View>
                    <Text>logo</Text>
                    <Text>Adicione os participantes do evento</Text>
                </View>
            </View>
            <View id="body" style={AddParticipatesStyles.body}>
                <View id="menuView" style={AddParticipatesStyles.menu_opition}>
                    <Pressable id='adicionar_modificador' style={[styles_button_grey_sobra(0), AddParticipatesStyles.buttons_options]}>
                        <Text>
                            <Text style={{ fontSize: 18, color: "#A9A9A9" }}>+</Text>
                            <Text style={AddParticipatesStyles.button_Text}> modificador</Text>
                        </Text>
                    </Pressable>
                    <Pressable id='adicionar_participante' style={[styles_button_grey_sobra(0), AddParticipatesStyles.buttons_options]}>
                        <Text>
                            <Text style={{ fontSize: 18, color: "#A9A9A9" }}>+</Text>
                            <Text style={AddParticipatesStyles.button_Text}>Participante</Text>
                        </Text>
                    </Pressable>
                    <Pressable id='proceguir' style={[styles_button_grey_sobra(0), AddParticipatesStyles.buttons_options]}>
                        <Text>
                            <Text style={{ fontSize: 18, color: "#A9A9A9" }}> + </Text>
                            <Text style={AddParticipatesStyles.button_Text}>inciar</Text>
                        </Text>
                    </Pressable>
                </View>
                <ScrollView style={AddParticipatesStyles.ScrowView}>

                </ScrollView>
            </View>
            <View id="foother" style={AddParticipatesStyles.footer}>

            </View>
        </View>
    )
}
export default AddParticipante

