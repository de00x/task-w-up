import axios from 'axios'
import { ITodos } from '../Main.types'

interface IUseMainFunctions {
  todoAttachedFiles: string | null
  setTodoAttachedFiles: React.Dispatch<React.SetStateAction<string | null>>
  updateAllTodos: boolean
  setUpdateAllTodos: React.Dispatch<React.SetStateAction<boolean>>
}

const useMainFunctions = ({
  todoAttachedFiles,
  setTodoAttachedFiles,
  updateAllTodos,
  setUpdateAllTodos,
}: IUseMainFunctions) => {
  const todoAttachedFilesOpen = (fileName: string | null): void => {
    if (todoAttachedFiles === fileName) {
      setTodoAttachedFiles('')
    } else setTodoAttachedFiles(fileName)
  }

  const todoCompleted = (todos: ITodos): void => {
    axios
      .put('/completed-task', {
        id: todos.id,
        isCompleted: todos.isCompleted,
      })
      .then(() => setUpdateAllTodos(!updateAllTodos))
      .catch((err) => console.log('err', err))
  }

  const todoDelete = (id: string): void => {
    const quest = confirm('Вы действительно хотите удалить данный todo ?')
    if (quest) {
      axios
        .delete(`/delete-task?id=${id}`)
        .then(() => setUpdateAllTodos(!updateAllTodos))
        .catch((err) => console.log('err', err))
    }
  }
  return { todoAttachedFilesOpen, todoCompleted, todoDelete }
}

export default useMainFunctions
