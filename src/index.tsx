import React, { useRef } from 'react';
import { Pressable } from 'react-native';
import { View } from 'react-native';

type SecretChamberProps = {
  taps: number;
  children: React.ReactNode;
  onOpen: () => void;
};

export const SecretChamber = ({
  taps,
  children,
  onOpen,
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
          onOpen();
        }
      }}
    >
      <View>{children}</View>
    </Pressable>
  );
};
