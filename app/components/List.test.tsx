import { render, screen } from '@testing-library/react';
import List from './List';

test('renders the correct number of list items and checks the content of the first item', () => {
  const items = [
    { id: 1, title: 'Title 1', description: 'Description 1' },
    { id: 2, title: 'Title 2', description: 'Description 2' },
    { id: 3, title: 'Title 3', description: 'Description 3' },
  ];
  render(<List items={items} />);

  const listItems = screen.getAllByLabelText('list-item');
  expect(listItems.length).toBe(items.length);

  const firstItemTitle = screen.getByLabelText('Title 1');
  const firstItemDescription = screen.getByLabelText('Description 1');

  expect(firstItemTitle).toBeInTheDocument();
  expect(firstItemDescription).toBeInTheDocument();
});
