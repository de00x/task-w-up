import { InputDeadline, InputFiles, InputHeading, TextareaDesc } from './components/Inputs'
import { INewTodoData } from './Header.types'
import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Header.module.scss'
import useHeaderFunctions from './hooks/useHeaderFunctions'

interface IHeaderProps {
  updateAllTodos: boolean
  setUpdateAllTodos: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header: FC<IHeaderProps> = ({ updateAllTodos, setUpdateAllTodos }) => {
  const [selectedFile, setSelectedFile] = useState<Blob | null>(null)
  const [timeExecCheckbox, setTimeExecCheckbox] = useState(false)
  const [inputBorderRed, setInputBorderRed] = useState(false)
  const [addNewTodo, setAddNewTodo] = useState(false)
  const [newTodoData, setNewTodoData] = useState<INewTodoData>({
    date: '',
    heading: '',
    description: '',
  })

  /// finctions ///
  const { createNewTodo, handleChange, cancelAddNewTodo } = useHeaderFunctions({
    newTodoData,
    selectedFile,
    setAddNewTodo,
    updateAllTodos,
    setNewTodoData,
    setSelectedFile,
    timeExecCheckbox,
    setInputBorderRed,
    setUpdateAllTodos,
    setTimeExecCheckbox,
  })
  /// finctions ///

  /// styles ///
  const stylesHeaderContainer = cn(styles.headerContainer, {
    [styles.headerContainerBgdOff]: !addNewTodo,
  })
  /// styles ///

  return (
    <div className={stylesHeaderContainer}>
      {!addNewTodo ? (
        <div className={styles.btnAddContainer}>
          <button onClick={() => setAddNewTodo(true)} className={styles.btnAddTodo}>
            New Todo
          </button>
        </div>
      ) : (
        <div className={styles.addTodoFormContainer}>
          <form className={styles.addTodoForm}>
            <InputHeading
              newTodoData={newTodoData}
              setNewTodoData={setNewTodoData}
              inputBorderRed={inputBorderRed}
            />
            <TextareaDesc
              newTodoData={newTodoData}
              setNewTodoData={setNewTodoData}
              inputBorderRed={inputBorderRed}
            />
            <h1 className={styles.headerWantAddImg}>Do you want to add a picture?</h1>
            <InputFiles selectedFile={selectedFile} handleChange={handleChange} />
            <InputDeadline
              newTodoData={newTodoData}
              setNewTodoData={setNewTodoData}
              inputBorderRed={inputBorderRed}
              timeExecCheckbox={timeExecCheckbox}
              setTimeExecCheckbox={setTimeExecCheckbox}
            />
            <div className={styles.addTodoFooterContainer}>
              <button onClick={(e) => createNewTodo(e)}>Create new Todo</button>
              <button onClick={(e) => cancelAddNewTodo(e)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
