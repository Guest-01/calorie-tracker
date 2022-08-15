import "react-native-url-polyfill/auto"
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "react-native-rapi-ui";
import { useColorScheme } from "react-native"

export default function App() {
  const colorScheme = useColorScheme();
  console.log("user's color mode:", colorScheme);
  return (
    <ThemeProvider theme={colorScheme}>
      <AppNavigator />
    </ThemeProvider>
  );
}
