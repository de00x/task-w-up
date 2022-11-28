import { ReactComponent as Completed } from '../img/completed.svg'
import { ReactComponent as Trash } from '../img/trash.svg'
import { ReactComponent as Edit } from '../img/edit.svg'
import { FC } from 'react'
import { ITodos } from '../Main.types'
import styles from '../Main.module.scss'

interface ISVGControllersProps {
  todos: ITodos
  setCurrentTodoEditing: React.Dispatch<React.SetStateAction<string>>
  todoCompleted: (todos: ITodos) => void
  todoDelete: (id: string) => void
}

export const SVGControllers: FC<ISVGControllersProps> = ({
  todos,
  setCurrentTodoEditing,
  todoCompleted,
  todoDelete,
}): JSX.Element => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.mainHeaderText}>{todos.header}</div>
      <div className={styles.mainHeaderControllers}>
        <Edit onClick={() => setCurrentTodoEditing(todos.id)} />
        <Completed onClick={() => todoCompleted(todos)} />
        <Trash onClick={() => todoDelete(todos.id)} />
      </div>
    </div>
  )
}
