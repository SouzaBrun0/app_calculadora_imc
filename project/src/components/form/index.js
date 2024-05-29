import React, {useState} from "react";
import { TextInput, View,Text,Button } from "react-native";
import ResultImc from "./ResultImc";


export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [TextButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc(  //faz a conta o imc (adaptado para aceitar ponto e virgula pois no IOS aparece somenet virgula)
        (
          (weight.replace(",", ".") * 1) /
          (height.replace(",", ".") * 1 * (height.replace(",", ".") * 1))
        ).toFixed(2)
      );

}
function validationImc(){  
    if(weight != null && height != null){ //Valida se os dois dados foram preenchidos
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é: ")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
}
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput   //Input para escrever
                onChangeText={setHeight} //manda o dado daqui pro setHeith
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                ></TextInput>

                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"
                ></TextInput>

                <Button 
                onPress={() => validationImc()}
                title={TextButton}>
                </Button>
            </View>    
        
            <ResultImc messageResultImc={messageImc} ResultImc={imc} />
        </View>
    );
}