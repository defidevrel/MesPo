import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GradientAvatar } from "../components/GradientAvatar";
import { HomeScreen } from "../screens/HomeScreen";
import { PlaceholderScreen } from "../screens/PlaceholderScreen";
import { mespo } from "../theme/colors";

export type RootTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Send: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function WalletTab() {
  return <PlaceholderScreen title="Wallet" />;
}

function SendTab() {
  return <PlaceholderScreen title="Send" />;
}

function ProfileTab() {
  return <PlaceholderScreen title="Profile" />;
}

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const padBottom = Math.max(insets.bottom, 10);

  return (
    <View
      className="px-5 pt-3"
      style={{
        paddingBottom: padBottom,
        backgroundColor: mespo.tabBar,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 16,
      }}
    >
      <View className="flex-row items-end justify-center pb-1">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const inactive = mespo.tabInactive;
          const neon = mespo.neon;

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.title ?? route.name}
              onPress={onPress}
              className="min-w-[56px] flex-1 items-center justify-center py-1 active:opacity-80"
            >
              {route.name === "Home" ? (
                <View
                  className="items-center"
                  style={{ minHeight: 44, justifyContent: "flex-end" }}
                >
                  <Ionicons
                    name="home-outline"
                    size={26}
                    color={isFocused ? neon : inactive}
                  />
                  <View
                    style={{
                      height: 10,
                      marginTop: 4,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isFocused ? (
                      <View
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: neon,
                          shadowColor: neon,
                          shadowOpacity: 0.9,
                          shadowRadius: 6,
                          shadowOffset: { width: 0, height: 0 },
                        }}
                      />
                    ) : null}
                  </View>
                </View>
              ) : route.name === "Wallet" ? (
                <Ionicons
                  name="card-outline"
                  size={26}
                  color={isFocused ? neon : inactive}
                />
              ) : route.name === "Send" ? (
                <Ionicons
                  name="paper-plane-outline"
                  size={24}
                  color={isFocused ? neon : inactive}
                />
              ) : (
                <GradientAvatar size={30} />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
      <Tab.Screen
        name="Wallet"
        component={WalletTab}
        options={{ title: "Wallet" }}
      />
      <Tab.Screen name="Send" component={SendTab} options={{ title: "Send" }} />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{ title: "Profile" }}
      />
    </Tab.Navigator>
  );
}
