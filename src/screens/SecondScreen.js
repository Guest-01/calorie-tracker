import { FlatList, View } from "react-native";
import { Layout, Text, themeColor, TextInput, } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { dummyFoods } from "../../dummy"
import BaseTopNav from "../components/BaseTopNav";
import FoodItem from "../components/FoodItem";

export default function () {
  return (
    <Layout>
      <BaseTopNav backBtn={true} title="Second Screen!" />

      <View style={{ flex: 1, padding: 10 }}>
        <FlatList
          ListHeaderComponent={
            <TextInput
              placeholder='제품명("고추바사삭" 등)으로도 검색 가능합니다'
              leftContent={<Ionicons name="search" size={20} color={themeColor.gray300} />}
              autoFocus
            />
          }
          ListHeaderComponentStyle={{ marginBottom: 10 }}

          data={dummyFoods}
          renderItem={({ item }) => (
            <FoodItem item={item} />
          )}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}

          ListEmptyComponent={<Text>검색 결과가 없습니다</Text>}
        />
      </View>
    </Layout>
  );
}
