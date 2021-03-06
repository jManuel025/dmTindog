import { StyleSheet } from 'react-native';

//COLORES
const fondo = '#FCFCFC';
const titulos = '#707070';
const texto = '#BDC6CD';
const textomDark = '#C4C4C4';
const textoDark = '#888F94';
const pricipal = '#FF3980';
const secundario = '#FF5B5B';

const styles = StyleSheet.create({
    // General
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
    // PerfilUsuario
    settings:{
        backgroundColor: fondo,
        position: 'absolute',
        top: 5,
        right: 5,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    floatButton:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 55,
        height: 55,
        backgroundColor: secundario,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        elevation: 4,
    },
    contSup:{
        flex: .6,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
        profilePhoto:{
            width: 150,
            height: 150,
            margin: 40,
            marginBottom: 0,
        },
        username:{
            fontSize: 20,
            color: textoDark,
            fontWeight: 'bold',
            margin: 5,
            marginBottom: 20,
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
        flex: 1,
        width: '100%',
    },
        dogContainer:{
            flexDirection: 'column',
            width: '100%',
            padding: 10,
            // paddingTop: 0,
            paddingBottom: 90,
        },
        subtitle:{
            color: textoDark,
            fontWeight: 'bold',
            fontSize: 15,
            margin: 10,
            padding: 10,
            alignSelf: 'flex-start',
            width: '100%',
        },
});

export default styles;