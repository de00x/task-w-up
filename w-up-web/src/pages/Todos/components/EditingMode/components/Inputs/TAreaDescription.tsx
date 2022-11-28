import { IChangedTodos } from '../../EditingMode.types'
import { FC } from 'react'
import cn from 'classnames'
import styles from '../../EditingMode.module.scss'

interface ITADescriptionProps {
  inputBorderRed: boolean
  changedData: IChangedTodos
  setChangedData: React.Dispatch<React.SetStateAction<IChangedTodos>>
}

export const TAreaDescription: FC<ITADescriptionProps> = ({
  inputBorderRed,
  changedData,
  setChangedData,
}): JSX.Element => {
  const stylesMainTaskDescriptionEdMode = cn(styles.mainTaskDescriptionEdMode, {
    [styles.errInputBgdRed]: inputBorderRed,
  })
  return (
    <div className={stylesMainTaskDescriptionEdMode}>
      <textarea
        value={changedData.description}
        onChange={(e) => setChangedData({ ...changedData, description: e.target.value })}
      />
    </div>
  )
}
