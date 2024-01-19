import List from './List'
import { render, screen } from '@testing-library/react'

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
    }
  ]

  render(<List items={items} />)
})

describe('<List />', () => {
  it('will check the list items length', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
  
  it('will should render all the items', () => {
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('Title 1')
    expect(screen.getAllByRole('listitem')[1]).toHaveTextContent('Title 2')
  })
})