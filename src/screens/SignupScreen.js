import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import React, { useState} from 'react';
import Spacer from '../components/Spacer';
import axios from 'axios'


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.header} h3>Signup for Tracker</Text>
      </Spacer>
      <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize={false} autoCorrect={false}/>
      <Spacer />
      <Input label="Password" secureTextEntry value={password} onChangeText={setPassword} autoCapitalize={false} autoCorrect={false}/>

      <Spacer>
        <Button title="Signup" />
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
    marginBottom: 50
  }
});
