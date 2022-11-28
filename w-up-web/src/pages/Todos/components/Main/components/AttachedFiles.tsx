import { FC } from 'react'
import { ITodos } from '../Main.types'
import styles from '../Main.module.scss'

interface IAttachedFiles {
  todos: ITodos
  todoAttachedFilesOpen: (fileName: string | null) => void
  todoAttachedFiles: string | null
}

export const AttachedFiles: FC<IAttachedFiles> = ({
  todos,
  todoAttachedFilesOpen,
  todoAttachedFiles,
}): JSX.Element => {
  return (
    <div className={styles.mainAttachedFilesContainer}>
      {todos.filePath === null ? (
        <div className={styles.noFilesUploaded}>No attached files</div>
      ) : (
        <div
          onClick={() => todoAttachedFilesOpen(todos.filePath)}
          className={styles.mainAttachedFiles}
        >
          AttachedFiles {todoAttachedFiles === todos.filePath ? '▲' : '▼'}
        </div>
      )}
      {todoAttachedFiles === todos.filePath && (
        <div className={styles.attachedImage}>
          {todos.filePath !== '' ? (
            <>
              <img
                alt={todos.filePath !== null ? todos.filePath : 'fileName'}
                src={`/uploads/${todos.filePath !== null ? todos.filePath : ''}`}
              />
              <div
                onClick={() => todoAttachedFilesOpen(todos.filePath)}
                className={styles.mainAttachedFiles}
              >
                AttachedFiles {todoAttachedFiles === todos.filePath ? '▲' : '▼'}
              </div>
            </>
          ) : null}
        </div>
      )}
    </div>
  )
}
