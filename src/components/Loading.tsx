import React from 'react'
import styles from '@/styles/loading.module.css'

export const Loading: React.FC = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loader}></div>
        </div>
    )
}
