import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Counter } from "../components/Counter";
import styled from 'styled-components/native';

const TitleView = styled.ScrollView`flex:1;padding-top:15px; background-color: white;`;

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Testes',
  }; 

  render() {
    return (
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
            </View>
    );
  } 
}

const styles = StyleSheet.create({
    box: {
      
      width: 80, 
      height: 80, 
      borderWidth: 2, 
      borderRadius: 8, 
      backgroundColor: 'skyblue', 
      borderColor: 'steelblue',
      margin: 5      
    }
});

