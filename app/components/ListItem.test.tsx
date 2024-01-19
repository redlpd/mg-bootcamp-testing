// components/ListItem.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

test('renders title and description correctly', () => {
  const title: string = 'Test Title';
  const description: string = 'Test Description';
  render(<ListItem title={title} description={description} />);

  const titleElement = screen.getByTestId('title');
  const descriptionElement = screen.getByTestId('description');

  expect(titleElement).toHaveTextContent('Test Title');
  expect(descriptionElement).toHaveTextContent('Test Description');
});
