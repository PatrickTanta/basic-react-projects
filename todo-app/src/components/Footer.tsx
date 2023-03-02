import React, { FC } from 'react'

interface Props {}

export const Footer: FC<Props> = ({ activeCount, todos, onClearCompleted }) => {
    return (
        <div>
            <Filters />
        </div>
    )
}
