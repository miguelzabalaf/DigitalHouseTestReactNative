import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';
import { Colors } from 'react-native-ui-lib';

export function ArrowUp(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 15C8.27614 15 8.5 14.7761 8.5 14.5V2.70711L11.6464 5.85355C11.8417 6.04882 12.1583 6.04882 12.3536 5.85355C12.5488 5.65829 12.5488 5.34171 12.3536 5.14645L8.35355 1.14645C8.15829 0.951184 7.84171 0.951184 7.64645 1.14645L3.64645 5.14645C3.45118 5.34171 3.45118 5.65829 3.64645 5.85355C3.84171 6.04882 4.15829 6.04882 4.35355 5.85355L7.5 2.70711V14.5C7.5 14.7761 7.72386 15 8 15Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}
