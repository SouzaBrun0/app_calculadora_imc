import React, {useState} from "react";
import { TextInput, View,Text, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style"; 


export default function Form(props){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [TextButton, setTextButton] = useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)
const [imcList, setImcList] = useState([])

function imcCalculator(){
    let heightFormat = height.replace(",",".") // muda a virgula pra ponto
    let totalImc = ((weight / (heightFormat*heightFormat)).toFixed(2));
    setImcList((arr) => [...arr, {id: new Date().getTime(), imc:totalImc}]) 
    setImc(totalImc)
}
function verificationImc(){ //verifica se esta tudo preenchido se nao tiver ele vibra
    if(imc ==null){
        Vibration.vibrate();
        setErrorMessage("Campo Obrigatorio*")
    }
}
function validationImc(){ 
    console.log(imcList) 
    if(weight != null && height != null){ //Valida se os dois dados foram preenchidos
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é: ")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
        return
    } else{
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }
    
}
    return(

            <View  style={styles.formContext}>
                {imc == null ?  //if
                <Pressable onPress={Keyboard.dismiss} style={styles.form}> 

                <Text style={styles.formLabel}>Altura</Text>   
                <Text style={styles.errorMessage}>{errorMessage} </Text>
                <TextInput  style={styles.input}  //Input para escrever   (o pressable fecha o teclado ao clicar fora do input)
                onChangeText={setHeight} //manda o dado daqui pro setHeith
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage} </Text>
                <TextInput style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"
                ></TextInput>
 
                <TouchableOpacity
                style={styles.buttonCalculator}   // TIPO DE BOTÃO
                 onPress={() => {
                 validationImc()
                
                }}> 
                <Text style={styles.textbuttonCalculator}>{TextButton} </Text>
                </TouchableOpacity>
                </Pressable>

                : //else 
                
                <View style={styles.exibitionResultImc}>
            
                    <ResultImc messageResultImc={messageImc} ResultImc={imc} />
                    <TouchableOpacity
                        style={styles.buttonCalculator}   // TIPO DE BOTÃO
                        onPress={() => {validationImc()}}> 

                        <Text style={styles.textbuttonCalculator}>{TextButton} </Text>
                        </TouchableOpacity>
                    </View>
            //fim do else
            } 
        
            <FlatList 
               // showsVerticalScrollIndicator={false} tira a barrinha de scrooll
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({item}) =>{
                return(
                        <Text style={styles.ResultImcItem}>
                            <Text style={styles.textResultitemList}> Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}
                />
        
        <Text style={styles.assinatura} >Desenvolvido por Bruno Souza</Text>

        </View>    

    );
}