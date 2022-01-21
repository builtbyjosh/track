import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Button title='Go to Signin' onPress={()=>{navigation.navigate('Signin')}} />
      <Button title='Go to Main Flow' onPress={()=>{navigation.navigate('mainFlow')}} />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
