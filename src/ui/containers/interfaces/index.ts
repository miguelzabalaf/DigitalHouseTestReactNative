// Dependencies
import { PropsWithChildren } from 'react';

export interface ContainerProps extends PropsWithChildren {}

export interface ContentWithPaddingHorizontalProps extends ContainerProps {
  flex?: boolean;
}

export interface ContentWithPaddingHorizontalStylesProps
  extends Pick<ContentWithPaddingHorizontalProps, 'flex'> {}
