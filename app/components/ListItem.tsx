type Props = {
  title: string
  description: string
}

const ListItem: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <p aria-label='title'>
        Title: {title}
      </p>
      <p aria-label='description'>
        Description: {description}
      </p>
    </div>
  )
}

export default ListItem
