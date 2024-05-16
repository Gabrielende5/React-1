import React from 'react'
import { generateAtualDate } from '../helpers/generateAtualDate'

export const mockNotes = [ // "[]" pois é uma lista
    {
        id: 1,
        title: 'Nota 1 teste',
        description: 'Teste 1',
        date: generateAtualDate()
    },
    {
        id: 2,
        title: 'Nota 2 teste',
        description: 'Teste 2',
        date: generateAtualDate()
    },
    {
        id: 3,
        title: 'Nota 3 teste',
        description: 'Teste 3',
        date: generateAtualDate()
    },
]

