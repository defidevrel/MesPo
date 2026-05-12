import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

/** Blurred vibrant avatar — purple / pink / blue (reference). */
const COLORS = ["#c084fc", "#f472b6", "#818cf8", "#38bdf8"] as const;

type Props = {
  size?: number;
  className?: string;
};

export function GradientAvatar({ size = 44, className }: Props) {
  return (
    <View
      className={`overflow-hidden rounded-full ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <LinearGradient
        colors={[...COLORS]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: size, height: size, flex: 1 }}
      />
    </View>
  );
}
