import { Text, View } from "react-native";

import { mespo } from "../theme/colors";

type Props = { title: string };

export function PlaceholderScreen({ title }: Props) {
  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: mespo.page }}
    >
      <Text className="text-lg font-semibold" style={{ color: mespo.ink }}>
        {title}
      </Text>
      <Text
        className="mt-2 px-8 text-center text-sm"
        style={{ color: mespo.muted }}
      >
        View-only wallet — this section is a placeholder.
      </Text>
    </View>
  );
}
