import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicCard from './BasicCard';

describe('BasicCard', () => {

});
it('should render the card with the correct width, height, and margin', () => {
  render(<BasicCard />);
  const card = screen.getByRole('article');
  expect(card).toHaveClass('w-[350px] h-[350px] m-4');
});