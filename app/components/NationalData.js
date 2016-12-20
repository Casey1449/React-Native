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
import nationalDataContainer from '../containers/nationalDataContainer';
import { NREL_API_KEY } from '../../Auth0-credentials';

export default class NationalData extends Component{
  constructor (props) {
   super(props);
   this.state = {

   };
 }

 componentDidMount(){
  fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=${NREL_API_KEY}`)
  .then((response) => response.json()).then((responseJSON)=>{console.log(responseJSON)});
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

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableHighlight,
//   TextInput,
//   ScrollView,
//   Switch,
//   Animated
// } from 'react-native';
// import { VictoryBar, VictoryChart } from 'victory-native';
// import { NREL_API_KEY } from '../../Auth0-credentials';
// import nationalData from '../containers/nationalDataContainer';

// const nationalData = [
//   // {"total": 54027,
//   // "fuels":
//   // {"E85": {"total": 3120}, "ELEC": {"total": 44366, "stations": {"total": 17632}}, "HY": {"total":86}, "LNG": {"total": 190}, "BD": {"total": 721}, "CNG": {"total": 1852}, "LPG": {"total": 3692} }}
//   {fuel: "E85", stations: 3120}, {fuel: "ELEC", stations: 17632}, {fuel: "HY", stations: 86}, {fuel: "LNG", stations: 190}, {fuel: "BD", stations: 721}, {fuel: "CNG", stations: 1852}, {fuel: "LPG", stations: 3692}
// ];


// export default class FuelChart extends Component {
//   constructor(props){
//     super(props);
//   }
//   componentDidMount() {
//     let nationalData = this._fetchNationalData();
//     // onPress={this._onCallApi.bind(this)}
//     return nationalData;
//   }
//
//   _fetchNationalData() {
//     const component = this;
//     const { stations, getNationalStations } = this.props;
//     const nationalAPI =
//       `https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=${NREL_API_KEY}`;
//
//     fetch(nationalAPI, {
//       method: 'GET'
//     })
//     .then((response) => response.json())
//     .then((jsonResponse) => {
//        getNationalStations(jsonResponse.station_counts);
//       console.log(jsonResponse);
//     })
//     .catch((error) => {
//       getNationalStations([]);
//       console.error(error);
//     });
//   }
//
//   render() {
//     const { stations } = this.props;
//     return (
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.text}>{"National Fuel Stations"}</Text>
//         <VictoryChart>
//           <VictoryBar
//             style={{
//               data: {fill: "blue"}
//             }}
//             data={nationalData}
//             x="fuel"
//             y="stations"
//           />
//         </VictoryChart>
//       </ScrollView>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   text: {
//     flex: 1,
//     fontSize: 20
//   },
//   chart: {
//     fontSize: 30,
//     marginTop: 50,
//     height: 200,
//   }
// });
//
