import { FC } from 'react'
import styles from './Skeleton.module.scss'
import ContentLoader from 'react-content-loader'

export const Skeleton: FC = (): JSX.Element => {
  const skeletonCount = [1, 2, 3, 4]
  return (
    <>
      {skeletonCount.map((i) => (
        <div key={i} className={styles.skeletonContainer}>
          <ContentLoader
            speed={3}
            height={210}
            backgroundColor="rgb(96, 92, 92)"
            foregroundColor="rgb(73, 71, 71)"
          >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
          </ContentLoader>
        </div>
      ))}
    </>
  )
}
