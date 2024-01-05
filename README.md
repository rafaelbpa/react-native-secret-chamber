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

Set the number of taps you want and encapsulate any ReactNode as a child. You can also set a password for it. If you do, you can also pass a alert title and message for the dialog

Note: The cadence of taps needs to be lower than 1.5 seconds, otherwise it will reset the tap counting.

```js
import { SecretChamber } from 'react-native-secret-chamber';
import { StyleSheet, View, Text } from 'react-native';

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
        <Text>I'm in</Text>
      </SecretChamber>
    </View>
  );
}

```

## Props
| Prop name     | required      | default value   | description |
| ------------- |:-------------:| :-------------: | :------------- |
| taps          | Yes           | you have to set | The number of taps required to trigger the action |
| onOpen        | Yes           | you have to set | The function you want to trigger when the number of taps reached the required amount |
| password      | No            |    "Password"   | An optional password. It will trigger an alert prompt asking for the password. |
| alertTitle    | No            |        -        | An optional title for the alert in case you set a password |
| alertMessage  | No            |        -        | An optional message for the alert in case you set a password |

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
