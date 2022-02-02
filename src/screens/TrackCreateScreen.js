import { StyleSheet,  View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import Map from '../components/Map';
import { requestForegroundPermissionsAsync } from 'expo-location';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);  
    }
  };

  useEffect(() => {
    startWatching()
  }, []);
    

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});


