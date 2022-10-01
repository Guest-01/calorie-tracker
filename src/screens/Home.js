import { View } from "react-native";
import { Layout, TextInput, themeColor, Section, SectionContent, Text } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import BaseTopNav from "../components/BaseTopNav";

export default function ({ navigation }) {
  return (
    <Layout>
      <BaseTopNav title="오늘 Today" />

      <View style={{ flex: 1, padding: 10 }}>

        <TextInput
          placeholder='이곳을 눌러 검색하세요'
          leftContent={<Ionicons name="search" size={20} color={themeColor.gray300} />}
          onFocus={() => navigation.navigate("Search")}
          showSoftInputOnFocus={false} // 키보드 비활성화
        />

        <Section style={{ marginTop: 10 }}>
          <SectionContent>
            <Text>{new Date().toLocaleDateString("ko-KR")}</Text>
          </SectionContent>
        </Section>
      </View>


    </Layout>
  );
}
