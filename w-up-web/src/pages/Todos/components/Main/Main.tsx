import { AttachedFiles, SVGControllers, TaskCompletedGreenModal } from './components'
import { Skeleton } from '../Skeleton/Skeleton'
import { EditingMode } from '../EditingMode'
import MainService from './Main.service'
import { ITodos } from './Main.types'
import { FC, useState } from 'react'
import styles from './Main.module.scss'
import useMainFunctions from './hooks/useMainFunctions'

interface IMainProps {
  updateAllTodos: boolean
  setUpdateAllTodos: React.Dispatch<React.SetStateAction<boolean>>
}

export const Main: FC<IMainProps> = ({ updateAllTodos, setUpdateAllTodos }): JSX.Element => {
  const [todoAttachedFiles, setTodoAttachedFiles] = useState<string | null>('')
  const [currentTodoEditing, setCurrentTodoEditing] = useState('')
  const [isLoadingPage, setIsLoadingPage] = useState(true)
  const [allTodos, setAllTodos] = useState<ITodos[]>([])

  /// useEffects ///
  MainService.GetAllTodos(setIsLoadingPage, setAllTodos, updateAllTodos)
  /// useEffects ///

  /// functions ///
  const { todoAttachedFilesOpen, todoCompleted, todoDelete } = useMainFunctions({
    todoAttachedFiles,
    setTodoAttachedFiles,
    setUpdateAllTodos,
    updateAllTodos,
  })
  /// functions ///

  return (
    <>
      {isLoadingPage ? (
        <Skeleton />
      ) : (
        <>
          {allTodos.map((todos) => (
            <div key={todos.id} className={styles.wrapper}>
              {currentTodoEditing === todos.id ? (
                <EditingMode
                  todos={todos}
                  updateAllTodos={updateAllTodos}
                  setUpdateAllTodos={setUpdateAllTodos}
                  todoAttachedFiles={todoAttachedFiles}
                  currentTodoEditing={currentTodoEditing}
                  todoAttachedFilesOpen={todoAttachedFilesOpen}
                  setCurrentTodoEditing={setCurrentTodoEditing}
                />
              ) : (
                <>
                  <div className={styles.mainContainer}>
                    <TaskCompletedGreenModal todos={todos} />
                    <SVGControllers
                      todos={todos}
                      setCurrentTodoEditing={setCurrentTodoEditing}
                      todoCompleted={todoCompleted}
                      todoDelete={todoDelete}
                    />
                    <div className={styles.mainTaskDescription}>{todos.description}</div>
                    <div className={styles.mainTaskDateExec}>
                      {todos.date !== null ? <div>Completed before -</div> : null}
                      {todos.date !== null ? todos.date : 'No deadline'}
                    </div>
                    <AttachedFiles
                      todos={todos}
                      todoAttachedFilesOpen={todoAttachedFilesOpen}
                      todoAttachedFiles={todoAttachedFiles}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </>
      )}
    </>
  )
}
