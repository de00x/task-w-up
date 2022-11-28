import { FC } from 'react'
import cn from 'classnames'
import styles from '../../Header.module.scss'

interface IInputFilesProps {
  selectedFile: Blob | null
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputFiles: FC<IInputFilesProps> = ({ selectedFile, handleChange }): JSX.Element => {
  /// styles ///
  const stylesAddFilesBtn = cn(styles.addFilesBtn, {
    [styles.addFilesBtnActive]: selectedFile !== null,
  })
  /// styles ///

  return (
    <div className={styles.addFilesTodoFormContainer}>
      <input
        onChange={(e) => handleChange(e)}
        type="file"
        className={stylesAddFilesBtn}
        accept="image/*,.png,.jpg,.jpeg,"
      />
    </div>
  )
}
