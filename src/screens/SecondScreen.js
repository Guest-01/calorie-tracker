import { FlatList, View } from "react-native";
import { Layout, Text, themeColor, TextInput, } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import BaseTopNav from "../components/BaseTopNav";
import FoodItem from "../components/FoodItem";
import { supabase } from "../lib/supabase";
import { useState } from "react"

export default function () {
  const [foods, setFoods] = useState(null);

  async function getFoods(keyword) {
    if (keyword === "") return;
    let { data: targetFoods, error } = await supabase
      .from('food')
      .select('*')
      .like('desc_kor', `%${keyword}%`);

    setFoods(targetFoods);
  }

  return (
    <Layout>
      <BaseTopNav backBtn={true} title="Second Screen!" />

      <View style={{ flex: 1, padding: 10 }}>
        <TextInput
          containerStyle={{ marginBottom: 10 }}
          placeholder='음식명/제품명을 입력해주세요'
          leftContent={<Ionicons name="search" size={20} color={themeColor.gray300} />}
          autoFocus
          onSubmitEditing={({ nativeEvent }) => getFoods(nativeEvent.text)}
        />
        <FlatList
          data={foods}
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
