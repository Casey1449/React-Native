import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Button,
  Navigator,
  TextInput,
  ScrollView,
  Switch,
  Animated
} from 'react-native';

import userContainer from '../containers/userContainer';
import NationalData from './NationalData';

class Stats extends Component{
  constructor (props) {
   super(props);
   this.state = {

   };
 }

//  componentDidMount(){
//   fetch('https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=EhCEXrfKfuNMgGH7Vn9Y2ggCbTeBhGB83xlLH8Xp').then((response) => response.json()).then((responseJSON)=>{console.log(responseJSON)});
// }

  _routeBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={this._routeBack.bind(this)}
          title="← Go Back"
          / >
        <Text style={styles.chart}>
          State Chart goes here!
        </Text>
        <NationalData />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 50
  },
  chart: {
    fontSize: 30,
    marginTop: 50,
    height: 200,
  },
});

export default userContainer(Stats);
