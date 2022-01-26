import { Text, Input, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, btnText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  return (
    <>
      <Spacer>
        <Text style={styles.header} h3>
          {headerText}
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
      {errorMessage ? (
        <Text style={styles.errMessage}>{errorMessage}</Text>
      ) : null}

      <Spacer>
        <Button title={btnText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  header: {
    marginBottom: 50,
    padding: 10
  },
  errMessage: {
    fontSize: 16,
    color: 'red',
    padding: 15,
  },
});
