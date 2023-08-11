import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DaegunLogo from '../components/Auth/DaegunLogo';
import InputWithLabel from '../components/Auth/InputWithLabel';
import SubmitButton from '../components/Auth/SubmitButton';
import {View} from 'react-native';

export default function Login() {
  return (
    <SafeAreaView>
      <DaegunLogo />
      <View>
        <InputWithLabel label={'이메일'} />
        <InputWithLabel label={'비밀번호'} />
        <SubmitButton content={'로그인'} />
      </View>
    </SafeAreaView>
  );
}
