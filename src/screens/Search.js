import { FlatList, ScrollView, View } from "react-native";
import { Layout, Text, themeColor, TextInput, } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import BaseTopNav from "../components/BaseTopNav";
import FoodItem from "../components/FoodItem";
import { supabase } from "../lib/supabase";
import { useState } from "react"
import FoodChip from "../components/FoodChip";

export default function () {
  const [foods, setFoods] = useState(null);
  const [added, setAdded] = useState([]);

  async function getFoods(keyword) {
    if (keyword === "") return;
    let { data: targetFoods, error } = await supabase
      .from('food')
      .select('*')
      .like('desc_kor', `%${keyword.trim()}%`);

    if (error) {
      console.log(error);
    }

    setFoods(targetFoods);
  }

  function pressFood(food) {
    setAdded([...added, food]);
  }

  function pressChip(name) {
    setAdded(added.filter(food => food.desc_kor !== name));
  }

  return (
    <Layout>
      <BaseTopNav backBtn={true} title="검색 Search" />

      <View style={{ flex: 1, padding: 10 }}>
        <TextInput
          containerStyle={{ marginBottom: 8 }}
          placeholder='음식명/제품명을 입력해주세요'
          leftContent={<Ionicons name="search" size={20} color={themeColor.gray300} />}
          autoFocus
          onSubmitEditing={({ nativeEvent }) => getFoods(nativeEvent.text)}
        />

        <ScrollView style={{ flexGrow: 0, marginBottom: 10 }} horizontal showsHorizontalScrollIndicator={false}>
          {added.map((food, idx) => <FoodChip key={idx} title={food.desc_kor} handlePress={pressChip} style={{ marginRight: 5 }} />)}
        </ScrollView>

        <FlatList
          data={foods}
          renderItem={({ item }) => (
            <FoodItem item={item} handlePress={pressFood} />
          )}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
          ListEmptyComponent={<Text>검색 결과가 없습니다</Text>}
        />
      </View>
    </Layout>
  );
}
