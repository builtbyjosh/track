import { StyleSheet, View, TouchableOpacity } from 'react-native';
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
        autoCapitalize="none"
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
      {state.errorMessage ? (
        <Text style={styles.errMessage}>{state.errorMessage}</Text>
      ) : null}

      <Spacer>
        <Button title="Signup" onPress={() => signup({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>Already have an account? Sign in instead!</Text>
        </Spacer>
      </TouchableOpacity>
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
  errMessage: {
    fontSize: 16,
    color: 'red',
    padding: 15
  },
  link: {
    color: 'blue',
    padding: 15
  }
});
