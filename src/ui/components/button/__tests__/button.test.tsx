import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Button } from '../button';
import renderer from 'react-test-renderer';

describe('[BUTTON] - Component', () => {
  let loading = false;
  const expectedText = 'Digital house';
  const onPress = () => {
    loading = true;
  };
  beforeEach(() => {
    render(<Button text={expectedText} loading={loading} onPress={onPress} />);
  });

  test('should render correctly', () => {
    expect(screen.getByTestId('DHButton')).toBeTruthy();
  });

  test('should render text correctly', () => {
    expect(screen.getByTestId('DHButtonText')).toBeTruthy();
  });

  test('should render loading correctly', () => {
    fireEvent.press(screen.getByTestId('DHButton'));
    expect(screen.findByTestId('DHButtonLoadingIndicator')).toBeTruthy();
  });

  test('render Button component correctly', () => {
    renderer.create(<Button text={expectedText} loading={loading} />);
  });
});
