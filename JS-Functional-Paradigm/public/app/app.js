import { log } from './utils/promise-helpers.js'
import { notasService as service } from './notas/service.js'

import './utils/array-helpers.js'





document
    .querySelector('#myButton')
    .onclick = () =>
    service
    .sumItems('2143')
    .then(log)
    .catch(console.log)


// [
//     [{ codigo: '123' }, { valor: 100 }]
// ]

// [{ codigo: '123' }, { valor: 100 }]

// [
//     [
//         { codigo: '123' },
//         { valor: 100 }
//     ]
// ]


// [
//     { codigo: '123' },
//     { valor: 100 }
// ]