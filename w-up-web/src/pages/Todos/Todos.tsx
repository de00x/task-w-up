import { Header } from './components/Header'
import { Main } from './components/Main'
import { FC, useState } from 'react'
import styles from './Todos.module.scss'

export const Todos: FC = (): JSX.Element => {
  const [updateAllTodos, setUpdateAllTodos] = useState(false)
  return (
    <div className={styles.todosWrapper}>
      <h1>de00x Todos</h1>
      <Header updateAllTodos={updateAllTodos} setUpdateAllTodos={setUpdateAllTodos} />
      <Main updateAllTodos={updateAllTodos} setUpdateAllTodos={setUpdateAllTodos} />
    </div>
  )
}
