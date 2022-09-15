import { StyleSheet } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
  return (
    // @ts-ignore - TailwindProvider  is missing a type definition
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <RootNavigator/>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
