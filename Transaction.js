import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions'

export default class Transaction extends React.Component {
   constructor(){
       super();
       this.state = {
         hasCameraPermissions: null,
         scanned: false,
         scannedData: '',
         button: "normal"
       }
   }
   getCameraPermissions = async ()=> {
     const {status} = await Permissions.askAsync(Permissions.CAMERA);

     this.setState({
        hasCameraPermissions: status === 'granted'
     })
   }

   handleBarcodeScan = async ({type, data})=> {
      this.setState({
          scanned: true,
          scannedData: data,
          button: "normal"
      })
   }

   render() {
       const hasCameraPermissions = this.state.hasCameraPermissions;
       const scanned = this.state.scanned;
       const button = this.state.button;

       if(button === 'clicked' && hasCameraPermissions){

       return (
          <BarCodeScanner onBarCodeScanned = {scanned ? undefined : this.handleBarcodeScan} style = {styles.absoluteFillObject}/>
       )

       }

       else if(button === 'normal'){
           return (
               <View style = {styles.container}>
                <Text style = {styles.text}>{hasCameraPermissions === true ? this.state.scannedData : 'Request Camera Permissions'}</Text>
                <TouchableOpacity onPress = {this.getCameraPermissions} style = {styles.button}><Text style = {styles.displayText}>Scan QR Code</Text></TouchableOpacity>
               </View>
           )
       }
   }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: 'red',
      margin: 10,
      padding: 10
    },
    displayText: {
      fontSize: 15,
      textDecorationLine: "underline"
    },
    text: {
      fontSize: 20,
      color: 'purple'
    },
});
  