import { render, screen } from '@testing-library/react';
import Button from "../button"
import { test } from 'vitest';

test('Button renders', () => {
  render(<Button />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

test('Button text renders', () => {
  render(<Button text="Test Button" />);
  const buttonElement = screen.getByText('Test Button');
  expect(buttonElement).toBeInTheDocument();
});