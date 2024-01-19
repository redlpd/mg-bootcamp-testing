import { render, screen } from '@testing-library/react';
import List from "./List";

beforeEach(() => {
  const items = [
    {
      id: 1,
      title: 'Title 1',
      description: 'Description 1'
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'Description 2'
    },
  ]
  render(<List items={items} />);
});


it('counts the length of the list', () => {
  const list = screen.getAllByRole('listitem');
  expect(list.length).toBe(2);
});

it('checks the content of the first list item', () => {
  const firstItem = screen.getAllByRole('listitem')[0];
  expect(firstItem).toHaveTextContent('Description 1');
});