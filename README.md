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
import { Alert, StyleSheet, View, Text } from 'react-native';

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

```

## Example

<img src="https://github.com/rafaelbpa/react-native-secret-chamber/assets/5288896/59125ed5-b0f3-4747-844c-aa08d25f4cb2" width="250" />


## Props
| Prop name     | required      | default value   | type           | description |
| ------------- |:-------------:| :-------------: | :---:          | :------------- |
| taps          | Yes           | you have to set |  number        | The number of taps required to trigger the action |
| onOpen        | Yes           | you have to set |  () => void    | The function you want to trigger when the number of taps reached the required amount |
| password      | No            |    "Password"   |  string        | An optional password. It will trigger an alert prompt asking for the password. |
| alertTitle    | No            |        -        |  string        | An optional title for the alert in case you set a password |
| alertMessage  | No            |        -        |  string        | An optional message for the alert in case you set a password |

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
