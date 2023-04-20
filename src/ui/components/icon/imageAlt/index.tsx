import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';
import { Colors } from 'react-native-ui-lib';

export function ImageAlt(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={16 * Number(scale)}
      height={16 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        d="M7.00005 2.5C7.00005 3.88071 5.88076 5 4.50005 5C3.11933 5 2.00005 3.88071 2.00005 2.5C2.00005 1.11929 3.11933 0 4.50005 0C5.88076 0 7.00005 1.11929 7.00005 2.5Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M11.2252 6.5528C11.0327 6.45655 10.8002 6.49428 10.648 6.64646L6.93788 11.3566L4.27894 8.58399C4.08063 8.45178 3.81657 8.47793 3.64803 8.64646L0.00158691 13V15C0.00158691 15.5523 0.449302 16 1.00159 16H15.0016C15.5539 16 16.0016 15.5523 16.0016 15V10.5L11.2252 6.5528Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}
