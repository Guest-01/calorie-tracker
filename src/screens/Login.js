import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Layout, Text, TextInput, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const [showPw, setShowPw] = useState(false);

  return (
    <Layout>
      <View style={{ flex: 1, paddingHorizontal: 30 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text size="h1" fontWeight="bold" style={{ textAlign: 'center' }}>칼로리 트래커</Text>
          <Text size="md" style={{ textAlign: 'center', color: themeColor.gray300 }}>방금 먹은 그거 몇 칼로리...?</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <TextInput placeholder="아이디" />
          <TextInput
            placeholder="비밀번호"
            secureTextEntry={!showPw}
            rightContent={
              <TouchableOpacity onPress={() => setShowPw(!showPw)}>
                {showPw ?
                  <Ionicons name="md-eye-outline" size={20} color={themeColor.gray300} />
                  : <Ionicons name="md-eye-off-outline" size={20} color={themeColor.gray300} />
                }
              </TouchableOpacity>
            }
          />
          <Button text="로그인" onPress={() => navigation.replace("Home")} />
          <Button text="회원가입" color={themeColor.black200} onPress={() => navigation.replace("Home")} />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between', marginVertical: 20 }}>
          <Text size="md" status="danger" style={{ textAlign: 'center' }}>오류 메시지</Text>
          <Text size="md" style={{ textAlign: 'center' }}>ver1.0.0</Text>
        </View>
      </View>
    </Layout>
  );
}
