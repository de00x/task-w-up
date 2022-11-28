import { IChangedTodos } from '../../EditingMode.types'
import { FC } from 'react'
import cn from 'classnames'
import styles from '../../EditingMode.module.scss'

interface IInputDataHProps {
  inputBorderRed: boolean
  changedData: IChangedTodos
  setChangedData: React.Dispatch<React.SetStateAction<IChangedTodos>>
}

export const InputDataHeader: FC<IInputDataHProps> = ({
  inputBorderRed,
  changedData,
  setChangedData,
}): JSX.Element => {
  const stylesMainHeaderTextEdMode = cn(styles.mainHeaderTextEdMode, {
    [styles.errInputBgdRed]: inputBorderRed,
  })
  return (
    <div className={stylesMainHeaderTextEdMode}>
      <input
        maxLength={20}
        value={changedData.header}
        onChange={(e) => setChangedData({ ...changedData, header: e.target.value })}
      />
    </div>
  )
}
