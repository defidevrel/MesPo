import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GradientAvatar } from "../components/GradientAvatar";
import { UsdcMark, UsdtMark } from "../components/StablecoinMark";
import { ZeroBrandMark } from "../components/ZeroBrandMark";
import {
  mockBalances,
  mockRecentTx,
  mockSpend,
  mockUser,
} from "../data/mockWallet";
import { mespo } from "../theme/colors";

function ActionAddIcon() {
  return (
    <MaterialCommunityIcons name="pail-plus" size={26} color={mespo.ink} />
  );
}

function ActionWithdrawIcon() {
  return (
    <MaterialCommunityIcons
      name="inbox-arrow-down"
      size={26}
      color={mespo.ink}
    />
  );
}

function ActionMoreIcon() {
  return (
    <MaterialCommunityIcons
      name="dots-horizontal-circle-outline"
      size={28}
      color={mespo.ink}
    />
  );
}

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const bottomPad = Math.max(insets.bottom, 16) + 92;

  return (
    <View className="flex-1" style={{ backgroundColor: mespo.page }}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: bottomPad }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingTop: insets.top + 8 }} className="px-5">
          {/* Header — circular wallet with thin ring (original) */}
          <View className="mb-5 flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <GradientAvatar size={48} />
              <View>
                <Text
                  className="text-[15px] font-normal"
                  style={{ color: mespo.muted }}
                >
                  {mockUser.greeting}
                </Text>
                <Text
                  className="text-[17px] font-bold"
                  style={{ color: mespo.ink }}
                >
                  {mockUser.displayName}
                </Text>
              </View>
            </View>
            <Pressable
              className="h-11 w-11 items-center justify-center rounded-full active:opacity-70"
              style={{
                backgroundColor: mespo.pocket,
                borderWidth: 1,
                borderColor: mespo.headerWalletRing,
              }}
            >
              <MaterialCommunityIcons
                name="wallet-outline"
                size={21}
                color={mespo.ink}
              />
            </Pressable>
          </View>

          {/* Single gray “pocket”: dashed GRAY border, inner depth, ZERO card tucked in */}
          <View className="relative z-0 mb-6">
            <View
              className="overflow-visible rounded-[28px]"
              style={{
                backgroundColor: mespo.pocket,
                borderWidth: 1.5,
                borderStyle: "dashed",
                borderColor: mespo.dashPocket,
                paddingTop: 56,
                paddingBottom: 22,
                paddingHorizontal: 18,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.07,
                shadowRadius: 20,
                elevation: 5,
              }}
            >
              {/* Inner top depth (subtle “pocket” lip) */}
              <View
                pointerEvents="none"
                className="absolute left-4 right-4 top-3 h-3 rounded-full"
                style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
              />

              {/* Slot notch — same as page bg */}
              <View
                pointerEvents="none"
                className="absolute left-0 right-0 top-0 items-center"
                style={{ zIndex: 5, marginTop: -10 }}
              >
                <View
                  style={{
                    width: 58,
                    height: 26,
                    borderBottomLeftRadius: 29,
                    borderBottomRightRadius: 29,
                    backgroundColor: mespo.page,
                  }}
                />
              </View>

              {/* ZERO card — overlaps pocket top, tilt matches reference (~-5°) */}
              <View
                className="absolute left-0 right-0 items-center"
                style={{ top: -52, zIndex: 20 }}
              >
                <View
                  className="w-[86%]"
                  style={{ transform: [{ rotate: "-5deg" }] }}
                >
                  <View
                    className="relative overflow-visible rounded-[22px] bg-black px-4 py-5"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 12 },
                      shadowOpacity: 0.45,
                      shadowRadius: 18,
                      elevation: 12,
                    }}
                  >
                    <View
                      className="absolute right-3 top-3 h-7 w-7 rounded-br-2xl rounded-tl-lg"
                      style={{
                        backgroundColor: mespo.neon,
                        opacity: 0.95,
                        transform: [{ rotate: "22deg" }],
                      }}
                    />
                    <ZeroBrandMark />
                  </View>
                </View>
              </View>

              <View className="mt-1">
                <View className="mb-2 flex-row items-center gap-1.5">
                  <Text
                    className="text-[13px] font-normal"
                    style={{ color: mespo.muted }}
                  >
                    {mockSpend.label}
                  </Text>
                  <Ionicons name="eye-outline" size={16} color={mespo.muted} />
                </View>
                <View className="flex-row flex-wrap items-end justify-between gap-3">
                  <Text
                    className="min-w-[40%] flex-shrink font-black text-black"
                    style={{
                      fontSize: 40,
                      lineHeight: 44,
                      letterSpacing: 0.3,
                    }}
                  >
                    {mockSpend.fiat}
                  </Text>
                  <Pressable
                    className="flex-row items-center gap-2 rounded-full border px-3.5 py-2.5 active:opacity-80"
                    style={{
                      backgroundColor: mespo.addressPillBg,
                      borderWidth: 1,
                      borderStyle: "dashed",
                      borderColor: mespo.dashPillLight,
                    }}
                  >
                    <Text
                      className="text-[12px] font-semibold"
                      style={{ color: mespo.white }}
                    >
                      {mockSpend.addressShort}
                    </Text>
                    <Ionicons name="copy-outline" size={16} color="#E8E8ED" />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>

          {/* Quick actions — icon above label (original layout) */}
          <View className="mb-8 flex-row gap-2.5">
            <Pressable
              className="min-w-0 flex-1 items-center justify-center rounded-2xl border py-3.5 active:opacity-90"
              style={{
                backgroundColor: mespo.white,
                borderColor: "#E0E0E4",
                borderWidth: 1,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.06,
                shadowRadius: 6,
                elevation: 2,
              }}
            >
              <ActionAddIcon />
              <Text
                className="mt-2 text-center text-[11px] font-bold"
                style={{ color: mespo.ink }}
              >
                Add money
              </Text>
            </Pressable>
            <Pressable
              className="min-w-0 flex-1 items-center justify-center rounded-2xl border py-3.5 active:opacity-90"
              style={{
                backgroundColor: mespo.white,
                borderColor: "#E0E0E4",
                borderWidth: 1,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.06,
                shadowRadius: 6,
                elevation: 2,
              }}
            >
              <ActionWithdrawIcon />
              <Text
                className="mt-2 text-center text-[11px] font-bold"
                style={{ color: mespo.ink }}
              >
                Withdraw
              </Text>
            </Pressable>
            <Pressable
              accessibilityLabel="More actions"
              className="min-w-0 flex-1 items-center justify-center rounded-2xl border py-3.5 active:opacity-90"
              style={{
                backgroundColor: mespo.white,
                borderColor: "#E0E0E4",
                borderWidth: 1,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.06,
                shadowRadius: 6,
                elevation: 2,
              }}
            >
              <ActionMoreIcon />
              <Text
                className="mt-2 text-center text-[11px] font-bold"
                style={{ color: mespo.ink }}
              >
                More actions
              </Text>
            </Pressable>
          </View>

          {/* Balances */}
          <Text
            className="mb-3 text-lg font-bold"
            style={{ color: mespo.ink }}
          >
            Balances
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="-mx-1 mb-8"
            contentContainerStyle={{ gap: 12, paddingHorizontal: 4 }}
          >
            {mockBalances.map((b) => (
              <View
                key={b.id}
                className="w-[152px] rounded-3xl border p-4"
                style={{
                  backgroundColor: mespo.white,
                  borderColor: "#DCDCE0",
                  borderWidth: 1,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 1,
                }}
              >
                <View className="mb-3">
                  {b.id === "usdc" ? (
                    <UsdcMark size={40} />
                  ) : (
                    <UsdtMark size={40} />
                  )}
                </View>
                <Text
                  className="text-lg font-bold"
                  style={{ color: mespo.ink }}
                >
                  {b.amount} {b.symbol}
                </Text>
                <Text
                  className="mt-1 text-[13px] font-normal"
                  style={{ color: mespo.muted }}
                >
                  {b.fiatHint}
                </Text>
              </View>
            ))}
          </ScrollView>

          {/* Recent history */}
          <View className="mb-2 flex-row items-center justify-between">
            <Text
              className="text-lg font-bold"
              style={{ color: mespo.ink }}
            >
              Recent history
            </Text>
            <Pressable hitSlop={8}>
              <Text
                className="text-[14px] font-medium"
                style={{ color: mespo.muted }}
              >
                View All
              </Text>
            </Pressable>
          </View>
          <View
            className="rounded-3xl border p-4"
            style={{
              backgroundColor: mespo.white,
              borderColor: "#DCDCE0",
              borderWidth: 1,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 10,
              elevation: 2,
            }}
          >
            <View className="flex-row items-start gap-3">
              <View
                className="h-11 w-11 items-center justify-center rounded-full"
                style={{ backgroundColor: mespo.historyIconBg }}
              >
                <MaterialCommunityIcons
                  name="credit-card-outline"
                  size={20}
                  color={mespo.white}
                />
              </View>
              <View className="min-w-0 flex-1">
                <Text
                  className="text-[15px] font-bold"
                  style={{ color: mespo.ink }}
                  numberOfLines={1}
                >
                  {mockRecentTx.title}
                </Text>
                <Text
                  className="mt-0.5 text-[13px] font-normal"
                  style={{ color: mespo.muted }}
                >
                  {mockRecentTx.subtitle}
                </Text>
                <View
                  className="mt-2 self-start rounded-full px-2.5 py-1"
                  style={{ backgroundColor: mespo.pendingBg }}
                >
                  <Text
                    className="text-[11px] font-bold uppercase tracking-wide"
                    style={{ color: mespo.pendingText }}
                  >
                    {mockRecentTx.status}
                  </Text>
                </View>
              </View>
              <View
                className="rounded-full border px-3 py-2"
                style={{
                  borderWidth: 1,
                  borderStyle: "dashed",
                  borderColor: mespo.dashAmount,
                  backgroundColor: mespo.white,
                }}
              >
                <Text
                  className="text-[13px] font-bold"
                  style={{ color: mespo.ink }}
                >
                  {mockRecentTx.amount}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
