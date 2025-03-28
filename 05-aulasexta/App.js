import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './PrimeiroComponente';
import SegundoComponente from './SegundoComponente';
import TerceiroComponente from './TerceiroComponente';
import JavaScriptComponente from './JavaScriptComponente';
import Perfil from './Perfil';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <PrimeiroComponente/>
      <SegundoComponente/>
      <TerceiroComponente/>
      <JavaScriptComponente/>
      <Perfil/>
      
      <Perfil
        nome="Pedro"
        idade={20}
        email="pedro@gmail.com"
      />

      <Perfil
        nome="João"
        idade={30}
        email="joao@gmail.com"
      />

      <Perfil
        nome="Maria"
        idade={40}
        email="maria@gmail.com"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});