import React from 'react';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';

interface SubmitButtonProps extends PressableProps {
  content: string;
}

export default function SubmitButton({content, ...props}: SubmitButtonProps) {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.content}>{content}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {},
  content: {},
});
