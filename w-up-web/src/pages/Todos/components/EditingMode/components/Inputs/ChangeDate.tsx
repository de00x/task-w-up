import { IChangedTodos } from '../../EditingMode.types'
import { ITodos } from '../../../Main/Main.types'
import { FC } from 'react'
import styles from '../../EditingMode.module.scss'

interface IChangeDateProps {
  changedData: IChangedTodos
  setChangedData: React.Dispatch<React.SetStateAction<IChangedTodos>>
  setIsChangeDate: React.Dispatch<React.SetStateAction<boolean>>
  isChangeDate: boolean
  todos: ITodos
}

export const ChangeDate: FC<IChangeDateProps> = ({
  changedData,
  setChangedData,
  setIsChangeDate,
  isChangeDate,
  todos,
}): JSX.Element => {
  return (
    <div className={styles.mainTaskDateExecEdMode}>
      <div>
        <label>
          <input onClick={() => setIsChangeDate(!isChangeDate)} type="checkbox" />
          <span>Change the date ?</span>
        </label>
      </div>
      {isChangeDate ? (
        <input
          maxLength={10}
          value={changedData.date !== null ? changedData.date : '01.01.2020'}
          className={styles.mainTasEdModeInputDate}
          onChange={(e) => setChangedData({ ...changedData, date: e.target.value })}
        />
      ) : (
        <div>
          {todos.date !== null ? <div>Completed before -</div> : null}
          {todos.date !== null ? todos.date : 'No deadline'}
        </div>
      )}
    </div>
  )
}
