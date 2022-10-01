import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Layout, Text, TextInput, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const [showPw, setShowPw] = useState(false);
  const [username, setUsername] = useState("")
  const [pw, setPw] = useState("")
  const [isError, setIsError] = useState(false)

  const handleLogin = () => {
    setIsError(false);
    if (username === "test" && pw === "1234") {
      console.log("auth success");
      navigation.replace("Home")
    } else {
      setIsError(true);
    }
  }

  return (
    <Layout>
      <View style={{ flex: 1, paddingHorizontal: 30 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text size="h1" fontWeight="bold" style={{ textAlign: 'center' }}>칼로리 트래커</Text>
          <Text size="md" style={{ textAlign: 'center', color: themeColor.gray300 }}>방금 먹은 그거 몇 칼로리...?</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <TextInput
            placeholder="아이디"
            value={username}
            onChangeText={(text) => { setIsError(false); setUsername(text); }}
          />
          <TextInput
            placeholder="비밀번호"
            value={pw}
            onChangeText={(text) => { setIsError(false); setPw(text); }}
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
          <Button text="로그인" onPress={handleLogin} />
          <Button text="회원가입" color={themeColor.black200} onPress={() => console.log("회원가입 누름")} />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between', marginVertical: 20 }}>
          {isError ?
            <Text size="md" status="danger" style={{ textAlign: 'center' }}>오류 메시지</Text>
            : null
          }
          <Text size="md" style={{ textAlign: 'center' }}>ver1.0.0</Text>
        </View>
      </View>
    </Layout>
  );
}
