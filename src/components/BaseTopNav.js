import { TopNav, useTheme, themeColor } from "react-native-rapi-ui"
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const BaseTopNav = ({ title, backBtn }) => {
  const navigation = useNavigation();
  const { isDarkmode, setTheme } = useTheme();

  return (
    <TopNav
      middleContent={title}
      leftContent={
        backBtn ?
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          /> : null
      }
      leftAction={() => backBtn ? navigation.goBack() : null}
      rightContent={
        <Ionicons
          name={isDarkmode ? "sunny" : "moon"}
          size={20}
          color={isDarkmode ? themeColor.white100 : themeColor.dark}
        />
      }
      rightAction={() => {
        if (isDarkmode) {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
    />
  )
}

export default BaseTopNav
