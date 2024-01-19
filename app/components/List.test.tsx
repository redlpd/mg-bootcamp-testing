import List from './List'
import { render, screen } from '@testing-library/react'

it('should render the List component with 2 items', () => {
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
    }
  ]

  render(<List items={items} />)
  expect(screen.getAllByLabelText('list-item')).toHaveLength(2)
  expect(screen.getAllByLabelText('list-item')[0]).toHaveTextContent('Title 1')
})