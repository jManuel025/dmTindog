import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar,ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default class configuracion extends Component {
  constructor() {
    super();
    this.state = {
      
        
    };
  }

 

  render() {
    const {menuItems} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F03579" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.texto}>Políticas de privacidad</Text>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              this.props.navigation.navigate('configuracion');
            }}>
            <Icon name="long-arrow-left" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.textos}>
            <Text style={{fontSize:25,fontStyle:'bold',textAlign:"center",marginTop:14}}>POLÍTICA DE PRIVACIDAD</Text>
            <Text style={{fontSize:15,marginTop:15}}>Bienvenido a la Política de privacidad de Tindog. Muchas gracias por tomarse el tiempo para leerla.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Apreciamos que nos confíe su información y tenemos la intención de mantener para siempre esa confianza. Todo empieza con asegurarnos de que comprende la información que recopilamos, por qué lo hacemos, cómo la usamos y cuáles son sus opciones con respecto a su información. Esta Política describe nuestras prácticas de privacidad en lenguaje sencillo, por lo que intentamos utilizar lo menos posible la terminología jurídica y técnica.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Esta Política de privacidad entra en vigor el 25 de mayo de 2018. La versión previa de esta Política de privacidad, disponible aquí, será de aplicación hasta esa fecha.</Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,fontStyle:'bold'}}>1. DÓNDE SE APLICA ESTA POLÍTICA</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Esta Política de privacidad se aplica a los sitios web, las aplicaciones, los eventos y demás servicios operados por Tinder. Para simplificar, en esta Política de privacidad nos referimos a todos estos como nuestros “servicios”. Para ser más claros, hemos agregado enlaces a esta Política de privacidad en todos los servicios aplicables.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Algunos servicios pueden requerir su propia política de privacidad. Si un servicio en particular tiene su propia política de privacidad, entonces esa política, no esta Política de privacidad, será de aplicación.</Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,fontStyle:'bold'}}>2. LA INFORMACIÓN QUE RECOPILAMOS</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}> Resulta evidente que no podemos ayudarlo a crear relaciones significativas sin contar con algo de información sobre usted, como los detalles básicos de su perfil y los tipos de personas que desearía conocer. También recopilamos información generada a medida que utiliza nuestros servicios; por ejemplo, registros de acceso, como también información de terceros, como cuando accede a nuestros servicios a través de una cuenta de las redes sociales.</Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,fontStyle:'bold'}}>3. COOKIES Y OTRAS TECNOLOGÍAS SIMILARES DE RECOPILACIÓN DE DATOS</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Puede que utilicemos, y autoricemos a otros para ello, cookies y otras tecnologías similares (p. ej., balizas web, píxeles) para reconocerlo a usted y reconocer sus dispositivos. Puede leer nuestra Política de cookies para obtener más información sobre por qué las utilizamos (por ejemplo, para autenticarlo, recordar sus preferencias y configuraciones, analizar el tráfico y las tendencias del sitio, hacer campañas publicitarias y medir su efectividad, permitirle usar características sociales) y cómo puede controlar mejor su uso, a través de las preferencias de su navegador y otras herramientas.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Algunos navegadores web (incluidos Safari, Internet Explorer, Firefox y Chrome) tienen la característica “No rastrear” (Do Not Track, “DNT”) que avisa al sitio web de que un usuario no desea que se haga el seguimiento de su actividad en línea. Si un sitio web que responde a una señal DNT recibe una, el navegador puede bloquear ese sitio web para que no recopile cierta información sobre el usuario del navegador. No todos los navegadores ofrecen la opción DNT y las señales DNT no son todavía uniformes. Por esta razón, muchos negocios, incluido Tinder, actualmente no responden a las señales DNT.</Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,fontStyle:'bold'}}>4. CÓMO COMPARTIMOS LA INFORMACIÓN</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Ya que nuestra meta es ayudarlo a crear relaciones significativas, obviamente, la información de los usuarios se comparte con otros usuarios. También compartimos cierta información de los usuarios con proveedores de servicios y socios que nos asisten en la operación de nuestros servicios, como otras compañías de Match Group y, en algunos casos, con las autoridades legales. </Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,fontStyle:'bold'}}>5. CÓMO PROTEGEMOS SU INFORMACIÓN</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Trabajamos duro para protegerlo del uso no autorizado, la alteración, revelación o destrucción de su información personal. Como con todas las compañías tecnológicas, a pesar de que tomamos medidas para proteger su información, no prometemos, ni debería esperar, que su información personal siempre se mantenga segura.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Supervisamos de forma habitual nuestros sistemas para hallar posibles vulnerabilidades y ataques y revisamos permanentemente las prácticas de recopilación, almacenaje y tratamiento de la información para actualizar nuestras medidas de seguridad físicas, técnicas y organizativas.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Puede que suspendamos su uso de todos o parte de los servicios sin notificación si sospechamos o detectamos cualquier fallo de seguridad. Si cree que su cuenta o información ya no es segura, comuníquenoslo inmediatamente aquí.</Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,marginBottom:15}}>El equipo de Tindog agradece su preferencia y deseamos que tu experiencia en nuestra aplicación sea satisfactoria.</Text>
        </ScrollView>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 60,
    borderBottomWidth: 2,
    borderBottomColor: '#e3e3d3',
    backgroundColor: '#FF3980',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    // alignSelf: "center",
    color: '#fff',
    margin: 17.5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textos: {
    // alignSelf: "center",
   marginLeft:15
  },
  contentContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3d3',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 15,
    width: '100%',
  },
  boton: {
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
    padding: 7.5,
    margin: 9.0,
    borderRadius: 10,
    width: 300,
    height: 40,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    elevation: 4,
  },
  textoBoton1: {
    color: '#FF3980',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  textoBoton2: {
    color: '#E64543',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
