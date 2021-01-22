import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Botao, Image, Text, View} from './src/Styles';
import cara from './src/cara.png';
import coroa from './src/coroa.png';

export default function App() {
  const [co, setCo] = useState(2);
  const[mostrar, setMostrar] = useState(false);
  const caraCoroa = () =>{
    setMostrar(false);
    const ca = Math.floor(Math.random() * 2);
    if(ca % 2 === 0 ){ 
      setMostrar(true);
      setCo(0); 
    } else {
      setMostrar(true);
      setCo(1);
    }
  }

  return (

    <View>  
      { co === 0 &&
      <Image 
      source={cara}
      />
      }
      { co === 1 &&
      <Image 
      source={coroa}
      />
      }

      <Botao onPress={ caraCoroa }><Text>Jogar Moeda</Text></Botao>
    </View>
  );
}
