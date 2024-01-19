import ListItem from './ListItem'
import { render, screen } from '@testing-library/react'

it('should render the List component with 2 items', () => {
  render(<ListItem title='Sample Title' description='Sample Description' />)
  expect(screen.getByLabelText('title')).toHaveTextContent('Sample Title')
  expect(screen.getByLabelText('description')).toHaveTextContent('Sample Description')
})