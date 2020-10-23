import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
  const [userNumber,setUserNumber]=useState();
  const [guessRounds,setGuessRounds]=useState(0);
  const configureNewGameHandler=()=>{
    setGuessRounds(0);
    setUserNumber(null);
  };
  const startGameHandler=(selectedNumber)=>{
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };
  const GameOverHandler=numOfRounds=>{
    setGuessRounds(numOfRounds);
  };
  let content=<StartGameScreen onStartGame={startGameHandler} />;
  if(userNumber&&guessRounds<=0){
    content=<GameScreen userChoice={userNumber} onGameOver={GameOverHandler} />;
  }
  else if(guessRounds>0){
    content=<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;
  }
  return (
    <View style={styles.container}>
      <Header title="Guess the number !"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
