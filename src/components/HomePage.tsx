import React, { useEffect, useState } from 'react'
import { Title } from './Title'
import { Filter } from './Filter'
import styles from '@/styles/home.module.css'
import array from '@/assets/array.json'
import { ContentCard } from './ContentCard'
import { Loading } from './Loading'

interface Element {
    category_name: string
    img_path: string
}

export const HomePage: React.FC = () => {
    const [filter, setFilter] = useState<string>('all')
    const [arrayElements, setArrayElements] = useState<Element[]>([])
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        if (filter === 'all') {
            setArrayElements(array)
        } else {
            const filteredArray = array.filter(item => item.category_name === filter)
            setArrayElements(filteredArray)
        }
    }, [filter])

    const changeFilter = (filter: string) => {
        setFilter(filter)
    }

    useEffect(() => {
        const categories = Array.from(new Set(array.map(item => item.category_name)));
        setCategories(categories);
    }, []);

    return (
        <>
            <Title />
            <Filter getNewFilter={changeFilter} categories={categories}/>
            <div className={styles.content}>
                {arrayElements.length !== 0 ? (
                    arrayElements.map((el, index) => <ContentCard key={index} element={el} />)
                ) : (
                    <Loading />
                )}
            </div>
        </>
    )
}
