import React from 'react';
import { list, listItem, Item } from './Table.styled';
//import  {data} from 'C:/lab-1-/src/components/Table/data.json';
import propTypes from 'prop-types';
//import {Table} from './Table.module.css';

//import css from './Board.js';
export const Tables = ({data}) => {

    return (      
<list>
    {data.map(({ type, duration }) => (
    <listItem>
       <Item>{type}: {duration}</Item>
       </listItem>
    ))}
       </list> 
       

    );
}
Tables.propTypes = {
 
    data: ({
        type: propTypes.string.isRequired,
        duration: propTypes.string.isRequired,
       
    }),


}



