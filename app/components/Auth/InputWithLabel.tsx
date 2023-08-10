import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface InputWithLabelProps extends TextInputProps {
  label?: string;
}

export default function InputWithLabel({
  label,
  ...inputProps
}: InputWithLabelProps) {
  return (
    <View style={styles.view}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...inputProps}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
  label: {},
  input: {},
});
