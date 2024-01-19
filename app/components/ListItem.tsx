type Props = {
  title: string
  description: string
}

const ListItem: React.FC<Props> = ({ title, description }: Props) => {
  return (
    <div aria-label='list-item'>
      Title: {title}
      <p>
        Description: {description}
      </p>
    </div>
  )
}

export default ListItem
