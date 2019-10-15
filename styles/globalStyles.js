import { StyleSheet } from 'react-native';

//COLORES
const fondo = '#F8FBFB';
const titulos = '#707070';
const texto = '#BDC6CD';
const textomDark = '#C4C4C4';
const textoDark = '#888F94';

const styles = StyleSheet.create({
    // General
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: fondo,
    },
    titles: {
        color: titulos,
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: "center",
        marginBottom: 120,
    },
    logo:{
        width: 165,
        height: 165,
        alignSelf: 'center',
    },
    texto:{
        textAlign: "center",
        color: texto,
        fontWeight: 'bold',
    },
    // PerfilUsuario
    contSup:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
        profilePhoto:{
            width: 150,
            height: 150,
            margin: 20,
            marginBottom: 0,
        },
        username:{
            fontSize: 20,
            color: textoDark,
            fontWeight: 'bold',
            margin: 5,
        },
        contBotonCirc:{
            flex: 1,
            flexDirection: "row",
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
        },
            contBtnTxt:{
                alignItems: 'center',
            },
            btnName:{
                color: '#C4C4C4',
                fontWeight: 'bold',
                margin: 5,
            },
    contInf:{
        flex: 1.4,
        width: '100%',
    },
        dogContainer:{
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            padding: 10,
        },
        subtitle:{
            color: textoDark,
            fontWeight: 'bold',
            fontSize: 15,
            margin: 10,
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