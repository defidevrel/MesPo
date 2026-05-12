import { Text, View } from "react-native";
import { mespo } from "../theme/colors";

/** “ZERO” — heavy italic + wide tracking; lime bar over the O (reference). */
export function ZeroBrandMark() {
  const base =
    "text-center font-black uppercase italic text-white tracking-[0.2em]";
  const sizeStyle = { fontSize: 44, lineHeight: 50 } as const;

  return (
    <View className="flex-row items-center justify-center">
      {(["Z", "E", "R"] as const).map((ch) => (
        <Text key={ch} className={base} style={sizeStyle}>
          {ch}
        </Text>
      ))}
      <View className="relative min-w-[40px] items-center justify-center">
        <View
          className="absolute -top-1.5 h-[5px] w-[22px] rounded-full"
          style={{
            backgroundColor: mespo.neon,
            shadowColor: mespo.neon,
            shadowOpacity: 0.75,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 0 },
          }}
        />
        <Text className={base} style={sizeStyle}>
          O
        </Text>
      </View>
    </View>
  );
}
