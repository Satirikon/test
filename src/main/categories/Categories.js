/* select или список кнопок
массив переделать в обьект name:Corporate, siblings: file1, file2...
сплитовать обьект сиблингс при фокусе на name и вываливать с картинкой в отдельную область
справа

*/
import React from 'react';
import './categories.scss';

let categories = [ 'Public','Private','Local','Else' ];
const Categories =(()=> {

    return (<ul>{ categories.map((category, index) => {
        return <button value={index} >{category}</button>;
    })}</ul>);
});
export default Categories;