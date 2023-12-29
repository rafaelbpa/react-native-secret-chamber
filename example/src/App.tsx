import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, SecretChamber } from 'react-native-secret-chamber';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <SecretChamber
        taps={10}
        onOpen={() => console.log('já sei teu segredinho!')}
      >
        <Text>Result: {result}</Text>
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
