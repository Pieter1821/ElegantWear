import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('it should render baseButton when nothing is passed', () => {
    render(Button, Test, Button);
    const buttonElement = screen.getByText(/test/i);
    expect(buttonElement.toHaveStyle("background-color: black"))
  });
});
