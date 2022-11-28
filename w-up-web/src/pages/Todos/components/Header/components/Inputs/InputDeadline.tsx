import { INewTodoData } from '../../Header.types'
import { FC } from 'react'
import cn from 'classnames'
import styles from '../../Header.module.scss'

interface IInputDeadLProps {
  inputBorderRed: boolean
  timeExecCheckbox: boolean
  newTodoData: INewTodoData
  setNewTodoData: React.Dispatch<React.SetStateAction<INewTodoData>>
  setTimeExecCheckbox: React.Dispatch<React.SetStateAction<boolean>>
}

export const InputDeadline: FC<IInputDeadLProps> = ({
  newTodoData,
  inputBorderRed,
  setNewTodoData,
  timeExecCheckbox,
  setTimeExecCheckbox,
}): JSX.Element => {
  /// styles ///
  const stylesTimeExecInput = cn(styles.timeExecInput, {
    [styles.timeExecInputDisabled]: timeExecCheckbox,
    [styles.timeExecInputBorderRed]: inputBorderRed,
  })
  /// styles ///

  return (
    <div className={styles.addTodoTimeExecContainer}>
      <input
        value={newTodoData.date}
        onChange={(e) => setNewTodoData({ ...newTodoData, date: e.target.value })}
        disabled={timeExecCheckbox}
        className={stylesTimeExecInput}
        placeholder={'01.01.2000'}
        maxLength={10}
      />
      <div className={styles.timeExecCheckbox}>
        <label>
          <input onClick={() => setTimeExecCheckbox(!timeExecCheckbox)} type="checkbox" />
          <span>No time limit</span>
        </label>
      </div>
    </div>
  )
}
