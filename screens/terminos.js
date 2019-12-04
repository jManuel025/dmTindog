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
          <Text style={styles.texto}>Términos y condiciones</Text>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              this.props.navigation.navigate('configuracion');
            }}>
            <Icon name="long-arrow-left" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.textos}>
            
            <Text style={{fontSize:25,fontStyle:'bold',textAlign:"center",marginTop:14}}>Términos y condiciones</Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,fontStyle:'bold'}}>1. Aceptación del Acuerdo de los Términos de uso.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Al crear una cuenta en Tindog, ya sea a través de un dispositivo móvil, aplicación móvil o computadora (colectivamente, el “Servicio”), usted acepta que quedará obligado por (i) los presentes Términos de uso, (ii) nuestra Política de privacidad y los Consejos de seguridad, cada uno de los cuales queda incorporado por referencia en este Acuerdo, y (iii) cualquiera de los términos que le hayan sido comunicados y que haya aceptado si compra cualquiera de las características, productos o servicios adicionales que ofrecemos en el Servicio (colectivamente, este “Acuerdo”). Si no acepta todos los términos de este Acuerdo y se compromete a quedar obligado por ellos, no utilice el Servicio.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Podremos hacer cambios en este Acuerdo y en el Servicio de vez en cuando. Podremos hacerlo por una variedad de razones, entre las que se incluye reflejar los cambios en o los requisitos de la legislación, nuevas características, o cambios en las prácticas comerciales. La versión más reciente de este Acuerdo será publicada en el Servicio bajo Configuración y también en gotindog.com, y debe comprobar periódicamente la versión más reciente. La versión más reciente es la versión que se aplica. Si los cambios incluyen cambios sustanciales que afecten a sus derechos u obligaciones, le notificaremos los cambios con antelación utilizando medios razonables, que pueden incluir la notificación a través del Servicio o por correo electrónico. Si continúa utilizando el Servicio después de que los cambios entren en vigor, se entiende que usted acepta el Acuerdo revisado.</Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,fontStyle:'bold'}}>2. Su cuenta.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Para utilizar Tindog, puede iniciar sesión con su nombre de usuario de Facebook.  Si lo hace, nos autoriza a acceder y utilizar cierta información de su cuenta de Facebook, incluyendo sin limitación su perfil público de Facebook e información sobre los amigos de Facebook que tiene en común con otros usuarios de Tindog que hayan dado a Facebook o a Tindog consentimiento para usar su información personal. Para obtener más información con respecto a la información que obtenemos de usted y cómo la utilizamos, por favor, consulte nuestra Política de privacidad.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Usted es responsable de mantener la confidencialidad de las credenciales de acceso que utiliza para registrarse en Tindog y es el único responsable de todas las actividades que ocurran bajo esas credenciales. Si cree que alguien ha obtenido acceso a su cuenta, póngase en contacto con nosotros de inmediato.</Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,fontStyle:'bold'}}>3. Modificación del Servicio y cancelación.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Tindog se esfuerza siempre en mejorar el Servicio y aportarle funciones adicionales que le sean atractivas y útiles. Esto significa que podemos añadir nuevas características o mejoras de productos de vez en cuando, así como eliminar algunas características, y si estas acciones no afectan sustancialmente a sus derechos u obligaciones, es posible que no le informemos de ello antes de adoptarlas. Podemos incluso suspender la totalidad del Servicio, en cuyo caso, le notificaremos por adelantado a menos que existan circunstancias atenuantes, tales como problemas de seguridad, que nos impidan hacerlo.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Puede cancelar su cuenta con 1 mes de aviso hasta el final del mes, en cualquier momento y por cualquier motivo, siguiendo las instrucciones que aparecen en la sección “Configuración” del Servicio. Sin embargo, si usa una cuenta de pagos externa, tendrá que gestionar las compras que haya realizado dentro de la aplicación a través de dicha plataforma (p.ej.: iTunes, Google Play) para evitar cualquier facturación adicional. Tindog puede cancelar su cuenta en cualquier momento y sin previo aviso si considera que ha infringido este Acuerdo. En caso de producirse dicha cancelación, usted no tendrá derecho a recibir ningún reembolso por las compras realizadas. Tras la cancelación de su cuenta, finalizará el presente Acuerdo, excepto por las siguientes disposiciones que seguirán vigentes para usted y para Tindog: sección 3, sección 4.</Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,fontStyle:'bold'}}>4. Seguridad; sus interacciones con otros usuarios.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Aunque Tindog tiene el propósito de fomentar una experiencia de usuario respetuosa a través de características como el doble consentimiento que solo permite a los usuarios comunicarse entre sí cuando ambos han indicado que tienen interés el uno en el otro. Tindog no es responsable de la conducta de ningún usuario dentro o fuera del Servicio. Usted se compromete a actuar con precaución en todas las interacciones con otros usuarios, sobre todo si decide comunicarse con ellos fuera del Servicio o conocerlos en persona. Además, usted se compromete a revisar y seguir los Consejos de seguridad de Tindog, antes de utilizar el Servicio. Usted se compromete a no proporcionar su información financiera (por ejemplo, su tarjeta de crédito o cuenta bancaria) ni transferir electrónicamente ni enviar dinero de ninguna otra forma, a otros usuarios.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>USTED ES EL ÚNICO RESPONSABLE DE SUS INTERACCIONES CON OTROS USUARIOS. USTED ENTIENDE QUE TINDOG NO LLEVA A CABO VERIFICACIONES DE LOS ANTECEDENTES PENALES DE LOS USUARIOS NI INVESTIGA DE NINGÚN OTRO MODO LOS ANTECEDENTES DE LOS USUARIOS. TINDOG NO HACE DECLARACIONES NI OFRECE GARANTÍAS EN CUANTO AL COMPORTAMIENTO DE LOS USUARIOS.</Text>
            <Text style={{fontSize:17,marginTop:15,textAlign:"justify", marginRight:10,fontStyle:'bold'}}>5. Contenido de otros usuarios.</Text>
            <Text style={{fontSize:15,marginTop:15,textAlign:"justify", marginRight:10}}>Aunque Tindog se reserva el derecho a revisar y eliminar el Contenido que viole el presente Acuerdo, dicho Contenido es responsabilidad exclusiva del usuario que lo publique, y Tindog no puede garantizar que todo el Contenido cumplirá con este Acuerdo. Si ve Contenido en los Servicios que viola este Acuerdo, notifíquelo dentro de los Servicios o a través de nuestra página de contacto.</Text>
        
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
  },textos: {
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
