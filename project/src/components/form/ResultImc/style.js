import { StyleSheet } from "react-native";
import ResultImc from ".";

const styles = StyleSheet.create({
    resultImc:{
        flex:1,
        marginTop: 15,
        paddingTop:10,
        borderRadius:60,
        alignItems:"center",
        width:"100%",
      
    },
    numberImc:{
        fontSize:48,
        color:"#ff0046",
        fontWeight:"bold",
    },  
    information:{
        fontSize:18,
        color:"#ff0046",
        fontWeight:"bold",
    },
    boxSharebutton:{
        width:"100%",
        alignItems:"center", 
        marginBottom:10,
    },
    shared:{
        backgroundColor:"#1877f2",
        borderRadius:50,
        paddingTop:5,
        paddingBottom:5,
    },
    sharedText:{
        color:"#ffffff",
        fontWeight:"bold",
        paddingHorizontal:30,
    }
});

export default styles