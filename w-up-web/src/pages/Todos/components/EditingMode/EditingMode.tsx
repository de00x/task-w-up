import { ChangeAttFiles, ChangeDate, InputDataHeader, TAreaDescription } from './components/Inputs'
import { AttachedFiles, AttachedFilesText } from './components/AttachedFiles'
import { SVGControllers } from './components/SVGControllers/AttachedFiles'
import { IChangedTodos } from './EditingMode.types'
import { ITodos } from '../Main/Main.types'
import { FC, useState } from 'react'
import styles from './EditingMode.module.scss'

interface IEditModeProps {
  todos: ITodos
  updateAllTodos: boolean
  currentTodoEditing: string
  todoAttachedFiles: string | null
  todoAttachedFilesOpen: (fileName: string | null) => void
  setUpdateAllTodos: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentTodoEditing: React.Dispatch<React.SetStateAction<string>>
}

export const EditingMode: FC<IEditModeProps> = ({
  todos,
  updateAllTodos,
  setUpdateAllTodos,
  todoAttachedFiles,
  currentTodoEditing,
  todoAttachedFilesOpen,
  setCurrentTodoEditing,
}): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<Blob | null>(null)
  const [isChangeAttFiles, setIsChangeAttFiles] = useState(false)
  const [inputBorderRed, setInputBorderRed] = useState(false)
  const [isChangeDate, setIsChangeDate] = useState(false)
  const [changedData, setChangedData] = useState<IChangedTodos>({
    id: '',
    header: todos.header,
    description: todos.description,
    date: todos.date !== null ? todos.date : '01.01.2020',
  })

  return (
    <div key={todos.id} className={styles.mainContainerEdMode}>
      <div className={styles.mainHeaderEdMode}>
        <InputDataHeader
          changedData={changedData}
          inputBorderRed={inputBorderRed}
          setChangedData={setChangedData}
        />
        <SVGControllers
          todos={todos}
          changedData={changedData}
          selectedFile={selectedFile}
          updateAllTodos={updateAllTodos}
          setUpdateAllTodos={setUpdateAllTodos}
          setInputBorderRed={setInputBorderRed}
          currentTodoEditing={currentTodoEditing}
          setCurrentTodoEditing={setCurrentTodoEditing}
        />
      </div>
      <TAreaDescription
        changedData={changedData}
        inputBorderRed={inputBorderRed}
        setChangedData={setChangedData}
      />
      <ChangeDate
        todos={todos}
        changedData={changedData}
        isChangeDate={isChangeDate}
        setChangedData={setChangedData}
        setIsChangeDate={setIsChangeDate}
      />
      <div className={styles.mainAttachedFilesContainerEdMode}>
        <ChangeAttFiles
          todos={todos}
          updateAllTodos={updateAllTodos}
          setSelectedFile={setSelectedFile}
          isChangeAttFiles={isChangeAttFiles}
          setUpdateAllTodos={setUpdateAllTodos}
          setIsChangeAttFiles={setIsChangeAttFiles}
        />
        <AttachedFilesText
          todos={todos}
          todoAttachedFilesOpen={todoAttachedFilesOpen}
          todoAttachedFiles={todoAttachedFiles}
        />
        <AttachedFiles
          todos={todos}
          todoAttachedFilesOpen={todoAttachedFilesOpen}
          todoAttachedFiles={todoAttachedFiles}
        />
      </div>
    </div>
  )
}
