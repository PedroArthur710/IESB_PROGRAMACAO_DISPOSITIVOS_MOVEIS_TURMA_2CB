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
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <PrimeiroComponente/>
      <SegundoComponente/>
      <TerceiroComponente/>
      <JavaScriptComponente/>
      <Perfil/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
