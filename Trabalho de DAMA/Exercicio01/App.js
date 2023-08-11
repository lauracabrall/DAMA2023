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

      <View style={styles.verde}></View>
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
    width:"50px",
    height:"50px",
    backgroundColor:"rgba(255, 000, 000, 0.1)",
    borderWidth:"2px",
    borderColor:"rgba(255, 000, 000, 1)",
  },

  azul:{
    width:"50px",
    height:"50px",
    backgroundColor:"rgba(000, 000, 255, 0.1)",
    borderWidth:"2px",
    borderColor:"rgba(000, 000, 255, 1)",
  },
  boxes:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
  },
  verde:{
    width:"50px",
    height:"50px",
    backgroundColor:"rgba(000, 255, 000, 0.1)",
    borderWidth:"2px",
    borderColor:"rgba(000, 255, 000, 1)",
    marginHorizontal:"auto",
  }

});
