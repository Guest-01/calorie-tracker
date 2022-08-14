import { View } from "react-native";
import { Layout, TextInput, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import BaseTopNav from "../components/BaseTopNav";

export default function ({ navigation }) {
  return (
    <Layout>
      <BaseTopNav title="Home!" />

      <View style={{ flex: 1, padding: 10 }}>
        <TextInput
          placeholder='이곳을 눌러 검색하세요'
          leftContent={<Ionicons name="search" size={20} color={themeColor.gray300} />}
          onFocus={() => navigation.navigate("SecondScreen")}
          showSoftInputOnFocus={false} // 키보드 비활성화
        />
      </View>
    </Layout>
  );
}
