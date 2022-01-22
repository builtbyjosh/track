import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import React from 'react';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3>Signup for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />

      <Spacer>
        <Button title="Signup" />
      </Spacer>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
