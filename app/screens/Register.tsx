import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DaegunLogo from '../components/Auth/DaegunLogo';
import InputWithLabel from '../components/Auth/InputWithLabel';
import SubmitButton from '../components/Auth/SubmitButton';
import {View} from 'react-native';

export default function Register() {
  return (
    <SafeAreaView>
      <DaegunLogo />
      <InputWithLabel label={'이메일 (학교이메일)'} />
      <View>
        <InputWithLabel label={'이름'} />
        <InputWithLabel label={'비밀번호'} />
        <InputWithLabel label={'비밀번호 확인'} />
        <SubmitButton content={'회원가입'} />
      </View>
    </SafeAreaView>
  );
}
