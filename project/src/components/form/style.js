import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        bottom:0,
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:"#ffffff",
        paddingTop:30,
    },
    form: {
        width:"100%",
        paddingTop:20,
     
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:13,
        paddingLeft:10,
    },
    textbuttonCalculator:{
        fontSize:20,
        color:"#ffffff",
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
    },
    assinatura:{
        paddingBottom:50,
        fontWeight:"bold"
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
        paddingTop:5,
    },
    exibitionResultImc:{
        width:"100%",
        height:"50%",
    },
    listImcs:{
        marginTop:20,
    },
    ResultImcItem:{
        fontSize:20,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
    },
    textResultitemList:{
        fontSize:16,
        color:"red",

    },
})

export default styles