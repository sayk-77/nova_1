import React, { useState } from 'react'
import styles from '@/styles/filter.module.css'

interface FilterProps {
    getNewFilter(filter: string): void
    categories: string[]
}

export const Filter: React.FC<FilterProps> = ({ getNewFilter, categories }) => {
    const [activeFilter, setActiveFilter] = useState<string>('all')

    const changeFilter = (filter: string) => {
        setActiveFilter(filter)
        getNewFilter(filter)
    }

    return (
        <div className={styles.filter}>
            <p className={activeFilter === 'all' ? styles.active : ''} onClick={() => changeFilter('all')}>
                ALL
            </p>
            {categories.map(category => (
                <p
                    key={category}
                    className={activeFilter === category ? styles.active : ''}
                    onClick={() => changeFilter(category)}
                >
                    {category.toUpperCase()}
                </p>
            ))}
        </div>
    )
}
