import {getAllText, render, screen } from '@testing-library/react'
import List from './List'

beforeEach(() => {
    const items = [
        {
          id: 1,
          title: 'Todo 1',
          description: 'Example todo 1'
        },
        {
          id: 2,
          title: 'Todo 2',
          description: 'Example todo 2'
        },
      ]
      render(<List items={items}/>)
})

it('should displays list of items', () => {
    // screen.debug()

    expect(screen.getAllByLabelText('listitem')).toBe(2)
})

it('should checks the content of the first list item', () => {

})