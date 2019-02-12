import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const TitleView = styled.ScrollView`flex:1;padding-top:15px; background-color: blue;`;

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Testes',
  }; 

  render() {
    return (
      <TitleView>
                
      </TitleView>
    );
  }
}

