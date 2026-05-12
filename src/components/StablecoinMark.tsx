import Svg, { Circle, Polygon, Rect } from "react-native-svg";
import { mespo } from "../theme/colors";

type Props = { size?: number };

/** Compact USDC-style mark: blue disk + white “pillars” (readable at small sizes). */
export function UsdcMark({ size = 40 }: Props) {
  const vb = 32;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${vb} ${vb}`}>
      <Circle cx={16} cy={16} r={15} fill={mespo.usdc} />
      <Rect x={11} y={9} width={3.2} height={14} rx={1} fill={mespo.white} />
      <Rect x={17.8} y={9} width={3.2} height={14} rx={1} fill={mespo.white} />
      <Rect x={9} y={14.5} width={14} height={3} rx={0.8} fill={mespo.white} />
    </Svg>
  );
}

/** USDT-style teal diamond + white “T”. */
export function UsdtMark({ size = 40 }: Props) {
  const vb = 32;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${vb} ${vb}`}>
      <Polygon points="16,4 29,16 16,28 3,16" fill={mespo.usdt} />
      <Rect x={14} y={10} width={4} height={14} rx={0.5} fill={mespo.white} />
      <Rect x={10} y={10} width={12} height={3.5} rx={0.5} fill={mespo.white} />
    </Svg>
  );
}
