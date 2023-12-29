import React, { useRef, useState } from 'react';
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
  const [tapCounter, setTapCounter] = useState(0);
  const [started, setStarted] = useState(false);
  const timer = useRef<NodeJS.Timeout>();

  return (
    <Pressable
      onPress={() => {
        if (!started) {
          timer.current = setTimeout(() => {
            setStarted(false);
          }, 1500);
        }
        if (started) {
          clearTimeout(timer.current);
          timer.current = setTimeout(() => {
            setStarted(false);
            setTapCounter(0);
          }, 1500);
        }
        setTapCounter((prev) => prev + 1);
        setStarted(true);
        if (tapCounter >= taps) {
          setTapCounter(0);
          clearTimeout(timer.current);
          setStarted(false);
          onOpen();
        }
      }}
    >
      <View>{children}</View>
    </Pressable>
  );
};
