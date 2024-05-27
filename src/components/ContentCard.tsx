import React from 'react'

interface ElementProps {
    element: {
        category_name: string
        img_path: string
    }
}

export const ContentCard: React.FC<ElementProps> = ({ element }) => {
    return (
        <>
            <img width='400px' height='300px' style={{ borderRadius: '10px' }} src={element.img_path} alt='image' />
        </>
    )
}
