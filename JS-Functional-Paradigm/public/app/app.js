import { log } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from '../app/notas/service.js';
document
    .querySelector('#myButton')
    .onclick = () => {
        service
            .sumItems('2143')
            .then(log)
            .then(total => console.log(total))
            .catch(console.log);
    };