import axios from 'axios'
import { INewTodoData } from '../Header.types'

interface IUseHeaderFunctions {
  updateAllTodos: boolean
  timeExecCheckbox: boolean
  newTodoData: INewTodoData
  selectedFile: Blob | null
  setAddNewTodo: React.Dispatch<React.SetStateAction<boolean>>
  setInputBorderRed: React.Dispatch<React.SetStateAction<boolean>>
  setUpdateAllTodos: React.Dispatch<React.SetStateAction<boolean>>
  setNewTodoData: React.Dispatch<React.SetStateAction<INewTodoData>>
  setTimeExecCheckbox: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedFile: React.Dispatch<React.SetStateAction<Blob | null>>
}

const useHeaderFunctions = ({
  newTodoData,
  selectedFile,
  setAddNewTodo,
  setNewTodoData,
  updateAllTodos,
  setSelectedFile,
  timeExecCheckbox,
  setUpdateAllTodos,
  setInputBorderRed,
  setTimeExecCheckbox,
}: IUseHeaderFunctions) => {
  const newTodoDataLength = newTodoData.description.length > 0 && newTodoData.heading.length > 2

  const successCreateNewTodo = (): void => {
    setAddNewTodo(false)
    setTimeExecCheckbox(false)
    setUpdateAllTodos(!updateAllTodos)
    setNewTodoData({ ...newTodoData, heading: '', description: '', date: '' })
  }

  const createNewTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault()
    const formData = new FormData()
    if (selectedFile !== null) formData.append('file', selectedFile)
    if (newTodoDataLength) {
      formData.append('header', newTodoData.heading)
      formData.append('description', newTodoData.description)
      formData.append('date', timeExecCheckbox ? '' : newTodoData.date)
      axios
        .post('/upload', formData)
        .then(successCreateNewTodo)
        .catch((err) => console.log('err', err))
    } else {
      setInputBorderRed(true)
      setTimeout(() => {
        setInputBorderRed(false)
      }, 5000)
    }
  }

  const cancelAddNewTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault()
    if (newTodoDataLength) {
      const quest = confirm(
        'Вы действительно хотите отменить создание данной todo? Все данные будут удалены'
      )
      if (quest) {
        setAddNewTodo(false)
        setTimeExecCheckbox(false)
        setNewTodoData({ ...newTodoData, heading: '', description: '', date: '' })
      }
    } else {
      setTimeExecCheckbox(false)
      setAddNewTodo(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files !== null) setSelectedFile(e.target.files[0])
  }

  return { createNewTodo, successCreateNewTodo, handleChange, cancelAddNewTodo }
}
export default useHeaderFunctions
