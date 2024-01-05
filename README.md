# react-native-secret-chamber

This library is a small tool when you want a secret on your `React-Native` app. You might want to navigate to a hidden screen, display an alert or anything you want.

## Installation

```sh
npm install react-native-secret-chamber
```
or
```sh
yarn add react-native-secret-chamber
```

## Usage

Set the number of taps you want and encapsulate any ReactNode as a child. The cadence of taps needs to be lower than 1.5 seconds, otherwise it will reset the tap counting.

```js
import { SecretChamber } from 'react-native-secret-chamber';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SecretChamber
        taps={10}
        onOpen={() => console.log('you entered the chamber')}
      >
        <Text>I'm in</Text>
      </SecretChamber>
    </View>
  );
}

```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
