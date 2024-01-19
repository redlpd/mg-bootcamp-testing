type Props = {
  title: string
  description: string
}

const ListItem: React.FC<Props> = ({ title, description }) => {
  return (
    <div data-testid="title">
      Title: {title}
      <p data-testid="description">
        Description: {description}
      </p>
    </div>
  )
}

export default ListItem
