import * as React from 'react';

import { Alert, StyleSheet, View, Text } from 'react-native';
import { SecretChamber } from 'react-native-secret-chamber';

export default function App() {
  const [secret, setSecret] = React.useState(false);

  return (
    <View style={styles.container}>
      <SecretChamber
        taps={10}
        password="123456"
        alertTitle="You should not be here!"
        alertMessage="Get out of my swamp!"
        onOpen={() => {
          Alert.alert('You entered', 'this gonna be our secret, okay? :)');
          setSecret(true);
        }}
      >
        <Text>There's nothing to see here</Text>
      </SecretChamber>
      {secret && <Text>Oops, you got me!</Text>}
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
