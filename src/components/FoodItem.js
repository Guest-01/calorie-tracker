import { TouchableOpacity, View } from "react-native";
import { Section, SectionContent, Text } from "react-native-rapi-ui"

const FoodItem = ({ item, handlePress }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <Section>
        <SectionContent>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text fontWeight="bold">{item.desc_kor}</Text>
              <Text size="md">{item.maker_name}</Text>
            </View>
            <View>
              <Text size="md" style={{ textAlign: "right" }}>1회 제공량(g): {item.serving_size}</Text>
              <Text fontWeight="bold" size="md" style={{ textAlign: "right" }}>칼로리: {item.calorie}</Text>
            </View>
          </View>
        </SectionContent>
      </Section>
    </TouchableOpacity>
  )
}

export default FoodItem;
