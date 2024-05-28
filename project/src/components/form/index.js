import React from "react";
import { TextInput, View,Text,Button } from "react-native";
import ResultImc from "./ResultImc";


export default function Form(){




    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput   //Input para escrever
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                ></TextInput>

                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 75.365"
                keyboardType="numeric"
                ></TextInput>

                <Button title="Calcular IMC">
                </Button>
            </View>    
        
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}