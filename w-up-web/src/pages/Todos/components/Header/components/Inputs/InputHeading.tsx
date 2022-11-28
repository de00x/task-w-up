import { INewTodoData } from '../../Header.types'
import { FC } from 'react'
import cn from 'classnames'
import styles from '../../Header.module.scss'

interface IInputHeadingProps {
  inputBorderRed: boolean
  newTodoData: INewTodoData
  setNewTodoData: React.Dispatch<React.SetStateAction<INewTodoData>>
}

export const InputHeading: FC<IInputHeadingProps> = ({
  newTodoData,
  inputBorderRed,
  setNewTodoData,
}): JSX.Element => {
  /// styles ///
  const stylesAddTodoFormHeading = cn(styles.addTodoFormHeading, {
    [styles.addTodoFormHeadingBorderRed]: inputBorderRed,
  })
  /// styles ///

  return (
    <div className={stylesAddTodoFormHeading}>
      <input
        maxLength={20}
        placeholder="Heading"
        value={newTodoData.heading}
        onChange={(e) => setNewTodoData({ ...newTodoData, heading: e.target.value })}
      />
    </div>
  )
}
