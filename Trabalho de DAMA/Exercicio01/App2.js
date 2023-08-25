import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.top}>App</Text>

      <View style={styles.boxes}>
        <View style={styles.vermelho}></View>
        <View style={styles.azul}></View>
      </View>

      <View style={styles.boxe2}>
      <View style={styles.verde}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },

  top:{
    borderWidth:"2px",
    width:"100%",
    textAlign:"center",
    fontSize:"25px",
  },

  vermelho:{
    width:"200px",
    height:"200px",
    backgroundColor:"rgba(255, 000, 000, 0.1)",
    borderWidth:"2px",
    borderColor:"rgba(255, 000, 000, 1)",
    position: 'absolute',
    left: 0,
  },

  azul:{
    width:"200px",
    height:"200px",
    backgroundColor:"rgba(000, 000, 255, 0.1)",
    borderWidth:"2px",
    borderColor:"rgba(000, 000, 255, 1)",
    position: 'absolute',
    right: 0,
  },
  boxes:{
    width:"100%",
    height: 200,
  },
  verde:{
    width:"200px",
    height:"200px",
    backgroundColor:"rgba(000, 255, 000, 0.1)",
    borderWidth:"2px",
    borderColor:"rgba(000, 255, 000, 1)",
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  boxe2: {
    width: '100%',
  }

});
