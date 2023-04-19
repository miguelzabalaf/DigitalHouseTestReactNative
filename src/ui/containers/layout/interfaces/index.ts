import { ContainerProps } from '../../interfaces';

export interface PageProps extends ContainerProps {
  withoutScroll?: boolean;
  contentWithoutPaddingTop?: boolean;
}

export interface PageStylesProps
  extends Pick<PageProps, 'contentWithoutPaddingTop'> {}
