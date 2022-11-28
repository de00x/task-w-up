import { INewTodoData } from '../../Header.types'
import { FC } from 'react'
import cn from 'classnames'
import styles from '../../Header.module.scss'

interface ITADescProps {
  inputBorderRed: boolean
  newTodoData: INewTodoData
  setNewTodoData: React.Dispatch<React.SetStateAction<INewTodoData>>
}

export const TextareaDesc: FC<ITADescProps> = ({
  newTodoData,
  inputBorderRed,
  setNewTodoData,
}): JSX.Element => {
  /// styles ///
  const stylesAddTodoFormDescription = cn(styles.addTodoFormDescription, {
    [styles.addTodoFormDescriptionBorderRed]: inputBorderRed,
  })
  /// styles ///

  return (
    <div className={stylesAddTodoFormDescription}>
      <textarea
        value={newTodoData.description}
        onChange={(e) => setNewTodoData({ ...newTodoData, description: e.target.value })}
        placeholder="Description"
      />
    </div>
  )
}
