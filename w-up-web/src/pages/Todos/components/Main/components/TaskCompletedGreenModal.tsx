import { FC } from 'react'
import { ITodos } from '../Main.types'
import styles from '../Main.module.scss'

interface ITaskCompletedProps {
  todos: ITodos
}

export const TaskCompletedGreenModal: FC<ITaskCompletedProps> = ({ todos }): JSX.Element => {
  const currentDate: () => string = (): string => {
    const newDate = new Date()
    const day = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()
    const currentDate = `${day}${'.'}${month}${'.'}${year}`
    return currentDate
  }
  return (
    <>
      {todos.date === currentDate() ? (
        <div className={styles.mainContainerCompleted}>Task is completed by date !</div>
      ) : null}
      {todos.isCompleted && todos.date !== currentDate() && (
        <div className={styles.mainContainerCompleted}>Task is completed!</div>
      )}
    </>
  )
}
