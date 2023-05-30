import React from 'react';
import { Item, Button,  Box } from './Table.styled';
//import  {data} from 'C:/lab-1-/src/components/Table/data.json';
import propTypes from 'prop-types';
//import {Table} from './Table.module.css';

//import css from './Board.js';
export const Tables = ({ cards, onDelete , onChange}) => {

    return (      
    <Box>    
<ul>
    
    {cards.map(({ id, type, duration }) => (
        
    <li key={id}>
        
       <Item >type={type}: duration={duration}</Item>
       <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
       <Button type="button" onClick={() => onChange(id)}>Change</Button>
       </li>
    ))}
     </ul> 
       </Box>

    );
}




Tables.propTypes = {
 
    cards:propTypes.shape ({
        type: propTypes.number.isRequired,
        duration: propTypes.string.isRequired,
        id:propTypes.string.isRequired,
       
   }),
   onDelete: propTypes.func.isRequired,
}

