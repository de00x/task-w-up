import styles from '../../EditingMode.module.scss'
import { ITodos } from '../../../Main/Main.types'
import { FC } from 'react'
import axios from 'axios'

interface IChangeAttFilesProps {
  todos: ITodos
  updateAllTodos: boolean
  isChangeAttFiles: boolean
  setUpdateAllTodos: React.Dispatch<React.SetStateAction<boolean>>
  setIsChangeAttFiles: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedFile: React.Dispatch<React.SetStateAction<Blob | null>>
}

export const ChangeAttFiles: FC<IChangeAttFilesProps> = ({
  todos,
  updateAllTodos,
  setSelectedFile,
  isChangeAttFiles,
  setUpdateAllTodos,
  setIsChangeAttFiles,
}): JSX.Element => {
  /// functions ///
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files !== null) setSelectedFile(e.target.files[0])
  }

  const deleteTodoFile = (todosID: string): void => {
    if (todos.filePath !== null) {
      const quest = confirm('Вы действительно хотите удалить файл ?')
      if (quest) {
        axios
          .put('delete-file', {
            id: todosID,
          })
          .then(() => setUpdateAllTodos(!updateAllTodos))
          .catch((err) => console.log('err', err))
      }
    }
  }
  /// functions ///

  return (
    <div className={styles.changeAttFiles}>
      <label>
        <input onClick={() => setIsChangeAttFiles(!isChangeAttFiles)} type="checkbox" />
        <div>Change attached files?</div>
      </label>
      {isChangeAttFiles ? (
        <input onChange={(e) => handleChange(e)} type="file" />
      ) : (
        <>
          {todos.filePath !== null && (
            <button onClick={() => deleteTodoFile(todos.id)} className={styles.btnDeleteAttFiles}>
              Delete files?
            </button>
          )}
        </>
      )}
    </div>
  )
}
