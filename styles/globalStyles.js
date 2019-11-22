import { StyleSheet } from 'react-native';

//COLORES
const fondo = '#fff';
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
    container2:{    
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: fondo,
        marginBottom:70
    },
    back:{
        position: 'absolute',
        top: 20,
        left: 20,
    },
    editar:{
        position: 'absolute',
        top:20,
        right:20,
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
    edit:{
        backgroundColor: fondo,
        position: 'absolute',
        top: 60,
        right: 5,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },edit2:{
        backgroundColor: fondo,
        position: 'absolute',
        top: 115,
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
        backgroundColor: pricipal,
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
            margin: 75,
            marginBottom: 0,
        },
        // profilePhoto2:{
        //     width: 150,
        //     height: 150,
        //     margin: 0,
        //     marginTop: -31,
        // },
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
            paddingTop: -10,
            // paddingTop: 0,
            paddingBottom: 90,
        },
        subtitle:{
            color: textoDark,
            fontWeight: 'bold',
            fontSize: 15,
            margin: 10,
            marginTop: -20,
            marginBottom: 40,
            padding: 10,
            alignSelf: 'flex-start',
            width: '100%',
        },
    barTitle:{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:2,
        borderBottomColor:"#e3e3d3",
        backgroundColor: '#FF3980',
    },
        titleBar:{
            color: textoDark,
            fontWeight: 'bold',
            fontSize: 20,
            margin: 10,
            padding: 10,
            color: '#FFF',
        },
    inputRegistro:{
        width: '85%',
        borderWidth: 1,
        paddingLeft: 15,
        paddingRight: 15,
        margin: 10,
        borderRadius: 5,
        borderColor: '#CDCDCD',
    },
    contSelect:{
        width: '85%',
        paddingTop: 15,
    },
    prueba:{
        flexDirection: 'row',
        justifyContent: "space-around",
        width: '85%',
        paddingTop: 15,
        paddingBottom: 15,
    },
    prueba2:{
        paddingTop: 20,
        paddingBottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    prueba3:{
        position: 'absolute',
        top: 60,
        height: '100%',
        width: '100%',
    },
    addphoto:{
        backgroundColor: secundario,
        width: 120,
        height: 120,
        borderRadius: 75,
        marginBottom: 5, 
        justifyContent: "center",
        alignItems: 'center',
    },
        subadd:{
            color: textoDark,
            paddingBottom: 15,
        },
        select:{
            marginTop: -15
        },
        btnform:{
            width: '45%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pricipal,
            height: 40,
            borderRadius: 20,
            padding: 7.5,
        },
            btnftext:{
                color: '#fff',
                fontWeight: 'bold'
            }

});

export default styles;