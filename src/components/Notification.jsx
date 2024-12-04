import { useContext } from "react"
import AnecdoteContext from "./AnecdoteContext"

const Notification = () => {
  const konteksti = useContext(AnecdoteContext)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  
  // if (true) return null

  return (
    <div style={style}>
      {konteksti.map((anecdote) => (
      <p key={anecdote.id}>{anecdote.content}</p>
      ))}
    </div>
  )
}

export default Notification
