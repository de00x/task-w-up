import { ITodos } from '../../../Main/Main.types'
import { FC } from 'react'
import styles from '../../EditingMode.module.scss'

interface IAttachedFilesTextProps {
  todos: ITodos
  todoAttachedFiles: string | null
  todoAttachedFilesOpen: (fileName: string | null) => void
}

export const AttachedFilesText: FC<IAttachedFilesTextProps> = ({
  todos,
  todoAttachedFiles,
  todoAttachedFilesOpen,
}): JSX.Element => {
  return (
    <>
      {todos.filePath === null ? (
        <div className={styles.noFilesUploadedEdMode}>No attached files</div>
      ) : (
        <div
          onClick={() => todoAttachedFilesOpen(todos.filePath)}
          className={styles.mainAttachedFilesEdMode}
        >
          AttachedFiles {todoAttachedFiles === todos.filePath ? '▲' : '▼'}
        </div>
      )}
    </>
  )
}
