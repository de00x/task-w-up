import { ReactComponent as Completed } from '../../img/completed.svg'
import { ReactComponent as Cancel } from '../../img/cancel.svg'
import { ReactComponent as Edit } from '../../img/edit.svg'
import { IChangedTodos } from '../../EditingMode.types'
import { ITodos } from '../../../Main/Main.types'
import { FC } from 'react'
import axios from 'axios'
import cn from 'classnames'
import styles from '../../EditingMode.module.scss'

interface ISVGControllersProps {
  todos: ITodos
  updateAllTodos: boolean
  selectedFile: Blob | null
  changedData: IChangedTodos
  currentTodoEditing: string
  setUpdateAllTodos: React.Dispatch<React.SetStateAction<boolean>>
  setInputBorderRed: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentTodoEditing: React.Dispatch<React.SetStateAction<string>>
}

export const SVGControllers: FC<ISVGControllersProps> = ({
  todos,
  changedData,
  selectedFile,
  updateAllTodos,
  setUpdateAllTodos,
  setInputBorderRed,
  currentTodoEditing,
  setCurrentTodoEditing,
}): JSX.Element => {
  /// longLogic ///
  const newChangedTodoDataLength =
    changedData.description.length > 0 && changedData.header.length > 2
  /// longLogic ///

  /// functions ///
  const successChangedData = (): void => {
    setUpdateAllTodos(!updateAllTodos)
    setCurrentTodoEditing('')
  }

  const editingTodo = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, todos: ITodos): void => {
    e.preventDefault()
    const formData = new FormData()
    if (selectedFile !== null) formData.append('file', selectedFile)
    if (newChangedTodoDataLength) {
      formData.append('id', todos.id)
      formData.append('header', changedData.header)
      formData.append('description', changedData.description)
      formData.append('date', changedData.date !== null ? changedData.date : '')
      axios
        .put('/editing-todos', formData)
        .then(successChangedData)
        .catch((err) => console.log('err', err))
    } else {
      setInputBorderRed(true)
      setTimeout(() => {
        setInputBorderRed(false)
      }, 5000)
    }
  }
  /// functions ///

  /// styles ///
  const stylesMainHeaderControllersEdMode = cn(styles.mainHeaderControllersEdMode, {
    [styles.mainHeaderControllersEdModeDisabled]: currentTodoEditing === todos.id,
  })
  /// styles ///

  return (
    <div className={stylesMainHeaderControllersEdMode}>
      <Edit />
      <Completed onClick={(e) => editingTodo(e, todos)} />
      <Cancel onClick={() => setCurrentTodoEditing('')} />
    </div>
  )
}
