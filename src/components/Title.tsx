import React from 'react'
import styles from '@/styles/title.module.css'

export const Title: React.FC = () => {
    return (
        <div className={styles.title}>
            <h2>THE PRODUCT GALLERY</h2>
            <p>
                awesome products prepared with creative ideas and great design
            </p>
        </div>
    )
}
