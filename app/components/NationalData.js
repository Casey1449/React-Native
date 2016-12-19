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

class NationalData extends Component{
  constructor (props) {
   super(props);
   this.state = {

   };
 }

 componentDidMount(){
  fetch('https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=EhCEXrfKfuNMgGH7Vn9Y2ggCbTeBhGB83xlLH8Xp').then((response) => response.json()).then((responseJSON)=>{console.log(responseJSON)});
}

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.chart}>
          National Chart goes here!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50
  },
  chart: {
    fontSize: 30,
    marginTop: 50,
    height: 200,
  },
});

export default userContainer(NationalData);

// import React from 'react';
//
// const NationalData = ({
//   totalResults, fuels, LNG, BD, CNG, LPG, E85, ELEC, HY
//  }) => {
//   return (
//   );
// };
//
// export default NationalData;
