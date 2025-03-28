import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const JavaScriptComponente = () => {

    const nome ="Pedro"
    const idade = 20

    function checkIdade(){
        if (idade >=18)
            return "Maior de idade"
        else{
        return "Menor de idade"
        }       
    }

return (
    <View>
        <Text>JavaScriptComponente</Text>
        <Text>Nome: {nome}</Text>
        <Text>Idade: {idade}</Text>
        <Text>Idade +40 {idade + 40}</Text>
        <Text>É maior de idade? {checkIdade()}</Text>
        <Text>Check 18+: {idade>=18 ? "18+" : "18-"}</Text>
        

    </View>
)





  return (
    <View>
      <Text>JavaScriptComponente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade +40 {idade + 40}</Text>
      <Button title= 'Clicar' onPress={alerta}></Button>
    </View>
  )
}

export default JavaScriptComponente

const styles = StyleSheet.create({})