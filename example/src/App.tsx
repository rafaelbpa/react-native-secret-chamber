import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { SecretChamber } from 'react-native-secret-chamber';

export default function App() {
  return (
    <View style={styles.container}>
      <SecretChamber
        taps={10}
        password="1234"
        alertTitle="You should not be here!"
        alertMessage="Get out of my swamp!"
        onOpen={() => console.log('you entered the chamber')}
      >
        <Text>Testing</Text>
      </SecretChamber>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
