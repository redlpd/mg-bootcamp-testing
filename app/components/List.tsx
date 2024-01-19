import React from "react"
import ListItem from "./ListItem"

type Props = {
  items: {
    id: number
    title: string
    description: string
  }[]
}

const List: React.FC<Props> = ({ items }: Props) => {
  return (
    <ul>
      {items.map(({ title, description, id }) => (
        <li key={id}>
          <ListItem title={title} description={description} />
        </li>
      ))}
    </ul>
  )
}

export default List
