import List from "./components/List"

const page = () => {
  const todos = [
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
    {
      id: 2,
      title: 'Todo 2',
      description: 'Example todo 2'
    }
  ]

  return (
    <div>
      <h1>List of Todos</h1>
      <List items={todos} />
    </div>
  )
}

export default page
