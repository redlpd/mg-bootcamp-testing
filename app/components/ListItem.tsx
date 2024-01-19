type Props = {
  title: string
  description: string
}

const ListItem: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      Title: {title}
      <p>
        Description: {description}
      </p>
    </div>
  )
}

export default ListItem
