import React, { useRef } from 'react';
import { Alert } from 'react-native';
import { Pressable } from 'react-native';
import { View } from 'react-native';

type SecretChamberProps = {
  children: React.ReactNode;
  onOpen: () => void;
  taps: number;
  password?: string;
  alertTitle?: string;
  alertMessage?: string;
};

export const SecretChamber = ({
  children,
  onOpen,
  taps,
  password,
  alertTitle = 'Password',
  alertMessage,
}: SecretChamberProps): JSX.Element => {
  const tapCnt = useRef<number>(0);
  const started = useRef<boolean>(false);
  const timer = useRef<NodeJS.Timeout>();

  return (
    <Pressable
      onPress={() => {
        if (started.current === false) {
          timer.current = setTimeout(() => {
            started.current = false;
          }, 1500);
        }
        if (started) {
          clearTimeout(timer.current);
          timer.current = setTimeout(() => {
            started.current = false;
            tapCnt.current = 0;
          }, 1500);
        }
        tapCnt.current += 1;
        started.current = true;
        if (tapCnt.current >= taps) {
          tapCnt.current = 0;
          clearTimeout(timer.current);
          started.current = false;
          if (password) {
            Alert.prompt(alertTitle, alertMessage, (typed) => {
              if (typed === password) {
                onOpen();
              }
            });
          } else {
            onOpen();
          }
        }
      }}
    >
      <View>{children}</View>
    </Pressable>
  );
};
