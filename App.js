import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { Text } from "react-native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Ionicons } from "@expo/vector-icons";
import { DashBoardScreen } from "./src/features/dashboard/screen/dashboard.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "./src/features/globalTheme";
const Tab = createBottomTabNavigator();
const SettingsScreen = () => <Text>Setting</Text>;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = "md-home";
                } else if (route.name === "Settings") {
                  iconName = "md-settings";
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "grey",
            }}
          >
            <Tab.Screen name="Home" component={DashBoardScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
