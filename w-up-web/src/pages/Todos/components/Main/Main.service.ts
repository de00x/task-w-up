import axios, { AxiosResponse } from 'axios'
import { useEffect } from 'react'
import { ITodos } from './Main.types'

const MainService = {
  GetAllTodos(
    setIsLoadingPage: React.Dispatch<React.SetStateAction<boolean>>,
    setAllTodos: React.Dispatch<React.SetStateAction<ITodos[]>>,
    updateAllTodos: boolean
  ) {
    useEffect(() => {
      axios
        .get('/todos')
        .then((res) => successReqAllTodos(res))
        .catch((err) => console.log('err', err))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateAllTodos])
    const successReqAllTodos = (res: AxiosResponse): void => {
      setAllTodos(res.data)
      setIsLoadingPage(false)
    }
  },
}

export default MainService
