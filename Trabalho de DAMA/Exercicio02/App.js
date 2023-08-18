import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Images, TouchableOpacityBase } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu treino</Text>
      <View style={styles.dificuldade} fasdf>
        <TouchableOpacity> <Text> Fácil </Text> </TouchableOpacity>
        <TouchableOpacity> <Text> Médio </Text> </TouchableOpacity>
        <TouchableOpacity> <Text> Difícil </Text> </TouchableOpacity>
      </View>
      <View style={styles.imagenspai}>
        <View>
          <Images source={require("./assets/images/foto1.jpg")}></Images>
          <Images source={require("./assets/images/foto2.jpg")}></Images>
        </View>
        <View>
          <Images source={require("./assets/images/foto3.jpg")}></Images>
          <Images source={require("./assets/images/foto4.jpg")}></Images>
        </View>
      </View>
      <View style={styles.secoespai}>
        <View>
          <Text>Seções por semana</Text>
        </View>
        <View>

          <TouchableOpacity> <Text> 1 </Text> </TouchableOpacity>
          <TouchableOpacity> <Text> 2 </Text> </TouchableOpacity>
          <TouchableOpacity> <Text> 3 </Text> </TouchableOpacity>
          <TouchableOpacity> <Text> 4 </Text> </TouchableOpacity>
          <TouchableOpacity> <Text> 5</Text> </TouchableOpacity>
          <TouchableOpacity> <Text> 6 </Text> </TouchableOpacity>

        </View>
        <View style={styles.duracaopai}>
          <View>
            <Text>Duração do treino</Text>
          </View>
          <View>
            <TouchableOpacity> <Text> 15 </Text> </TouchableOpacity>
            <TouchableOpacity> <Text> 20 </Text> </TouchableOpacity>
            <TouchableOpacity> <Text> 25 </Text> </TouchableOpacity>
            <TouchableOpacity> <Text> 30 </Text> </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.iniciar}> <Text> Iniciar Treino  </Text> </TouchableOpacity>
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
  
  iniciar:{
    width: "100%",
  },

  duracaopai:{
    width: "100%",
  },
  
  secoespai:{
    width: "100%",
  },

  iniciar:{
    width: "100%",
  },
  
  dificuldade:{
    width="100%"
  }
  

});