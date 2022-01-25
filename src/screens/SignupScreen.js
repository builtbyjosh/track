import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import React, { useState, useContext } from 'react';
import Spacer from '../components/Spacer';

import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.header} h3>
          Signup for Tracker
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Spacer>
        <Button title="Signup" onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
  header: {
    marginBottom: 50,
  },
});
