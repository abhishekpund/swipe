import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Card,Button,Icon} from "react-native-elements";
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80' },
  { id: 2, text: 'Card #2', uri: 'https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1302&q=80' },
  { id: 3, text: 'Card #3', uri: 'https://images.unsplash.com/photo-1613467663837-e4a6be2014b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1392&q=80' },
  { id: 4, text: 'Card #4', uri: 'https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 5, text: 'Card #5', uri: 'https://images.unsplash.com/photo-1558386621-37b91293b289?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 6, text: 'Card #6', uri: 'https://images.unsplash.com/photo-1558384695-59895fe53ff4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 7, text: 'Card #7', uri: 'https://images.unsplash.com/photo-1608661649288-d4a3e7ec4838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 8, text: 'Card #8', uri: 'https://images.unsplash.com/photo-1589966781856-8b0dd119f2b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80' },
];

class App extends Component {
  renderCard = (item) => {
    return (
      <Card key={item.id}>
        <Card.Image 
          source={{ uri: item.uri }}
        />
        <Card.Title style={{marginTop: 10,marginBottom:0}}>{item.text}</Card.Title>
        <Text style={{marginBottom: 10}}>I can & I will</Text>
        <Button
          icon={
            <Icon 
              name='code' 
              color='#ffffff' 
            />}
          title=" View Now !!!"
        />
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card>
        <Card.Title>All Done!</Card.Title>
        <Text style={{marginBottom: 10}}>There's no more content here.</Text>
        <Button title="Get more!"/>
      </Card>
    );
  }

  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 200
  },
});

export default App;
