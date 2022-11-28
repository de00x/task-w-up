import { ITodos } from '../../../Main/Main.types'
import { FC } from 'react'
import styles from '../../EditingMode.module.scss'

interface IAttFilesProps {
  todos: ITodos
  todoAttachedFiles: string | null
  todoAttachedFilesOpen: (fileName: string | null) => void
}

export const AttachedFiles: FC<IAttFilesProps> = ({
  todos,
  todoAttachedFiles,
  todoAttachedFilesOpen,
}): JSX.Element => {
  return (
    <>
      {todoAttachedFiles === todos.filePath && (
        <div className={styles.attachedImageEdMode}>
          {todos.filePath !== '' ? (
            <>
              <img
                alt={todos.filePath !== null ? todos.filePath : 'fileName'}
                src={`/uploads/${todos.filePath !== null ? todos.filePath : ''}`}
              />
              <div
                onClick={() => todoAttachedFilesOpen(todos.filePath)}
                className={styles.mainAttachedFilesEdMode}
              >
                AttachedFiles {todoAttachedFiles === todos.filePath ? '▲' : '▼'}
              </div>
            </>
          ) : null}
        </div>
      )}
    </>
  )
}
