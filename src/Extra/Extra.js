import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../Header/Header'
import AdvertisementsList from '../AdvertisementsList/AdvertisementsList'

export default class Extra extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'FAQ'} />
        <Text>Calcula las comisiones de tu microcrédito con la calculadora de préstamos que puedes encontrar en esta app.</Text>
        <Text>Preguntas frecuentes que debes saber para pedir un préstamo:</Text>
        <Text>-	¿Cuánto tendré que pagar cada mes?</Text>
        <Text>-	¿Qué pagaré de comisiones?</Text>
        <Text>-	¿Necesito algún aval?</Text>
        <Text>-	¿El préstamo compromete mi patrimonio?</Text>
        <Text>-	¿Puedo obtener un crédito desde el extranjero?</Text>
        <Text>-	¿Me concederán un crédito si no tengo un contrato indefinido?</Text>
        <Text>-	Soy el avalista de un solicitante de crédito. ¿Pueden quitarme la casa?</Text>
        <Text>-	Necesito dinero rápido: ¿hay prestamistas privados?</Text>
        <Text>-	Soy autónomo y quiero financiar mi negocio ¿Cuál es el mejor crédito para mí?</Text> 
        <Text>-	¿Qué es una reunificación de deudas?</Text>
        <Text>-	¿Necesito una hipoteca para reunificar deudas?</Text>
        <Text>-	¿Son de fiar las plataformas p2p?</Text>
        <Text>-	¿Podré acceder a un crédito si tengo menos de 20 años?</Text>
        <Text>Encuentra respuesta a estas importantes preguntas en las apps que puedes descargar aquí para pedir el préstamo de forma segura.</Text>
      </View>
    );
  }
}