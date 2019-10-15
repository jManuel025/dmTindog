import { StyleSheet } from 'react-native';

//COLORES
const fondo = '#F8FBFB';
const titulos = '#707070';
const texto = '#BDC6CD';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: fondo,
    },
    RegisterContainer:{
        marginTop:40,
        marginBottom:1,
        backgroundColor: fondo,
    },
    titles: {
        color: titulos,
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: "center",
        marginBottom: 80,
    },
    Registertitles: {
        color: titulos,
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: "center",
        marginBottom: 60,
    },
    logo:{
        width: 165,
        height: 165,
        alignSelf: 'center',
    },
    texto:{
        textAlign: "center",
        color: texto,
        margin:7.5,
        fontWeight: 'bold',
    },
    profilePhoto:{
        position: 'absolute',
        top: 50,
        width: 150,
        height: 150,
    },
    contBotonCirc:{
        // flex: .5,
        flexDirection: "row",
        justifyContent: 'space-around',
        // backgroundColor: '#000',
        width: '100%',
    },
    //PRUEBAS --> Botones de login en API
    // prueba1:{
    //     backgroundColor: "#56af54",
    //     flexDirection: "row",
    //     justifyContent: "space-around",
    //     width: 300,
    //     alignSelf: "center",
    // },
    // gl:{
    //     backgroundColor: "#000",
    //     width: 100,
    // },
    // fb:{
    //     backgroundColor: "#000",
    //     width: 100,
    // // },
    // userProfile:{
    //     backgroundColor: "#6f8926",
    // },  
});

export default styles;