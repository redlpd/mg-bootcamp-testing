import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";

it('checks if the title and description is displayed correctly', () => {
  render(<ListItem title='Test Title 1' description='Test Description 1' />);
  expect(screen.getByLabelText('list-item')).toHaveTextContent('Test Title 1');
  expect(screen.getByLabelText('list-item')).toHaveTextContent('Test Description 1');
}); 