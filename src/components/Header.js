import React from 'react'

export default function Header({numberTotalTodos}) {
    return (
        <div>
            <i>Todos Left: {numberTotalTodos}</i>
        </div>
    )
}
