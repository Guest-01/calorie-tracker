import { TouchableOpacity, View } from 'react-native'
import { Text, themeColor, useTheme } from 'react-native-rapi-ui'
import { Ionicons } from "@expo/vector-icons";

const FoodChip = ({ title = 'default', handlePress, style }) => {
  const { isDarkmode } = useTheme();

  return (
    <TouchableOpacity onPress={() => { handlePress(title) }}>
      <View style={{
        ...style,
        flexDirection: 'row',
        borderRadius: 50,
        backgroundColor: isDarkmode ? themeColor.dark100 : themeColor.infoTransparent,
        padding: 10,
        paddingRight: 6,
        alignItems: 'center',
      }}>
        <Text size="md" style={{ position: 'relative', top: -1, marginRight: 4 }}>{title}</Text>
        <Ionicons style={{ position: 'relative', top: -3 }} name="md-close-outline" size={20} color={isDarkmode ? themeColor.gray200 : themeColor.black} />
      </View>
    </TouchableOpacity>
  )
}

export default FoodChip
