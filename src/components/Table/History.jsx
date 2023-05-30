import React from 'react';
import { Item, Button, listCard, listItem, Box } from './Table.styled';
//import  {data} from 'C:/lab-1-/src/components/Table/data.json';
import propTypes from 'prop-types';
export const Hist  = ({history,onDelete1}) => {
    return (      
        <Box>    
    <listCard>
        
        {history.map(({ id, type1, time }) => (
            
        <listItem key={id}>
            
           <Item >type={type1}: date of service={time}</Item>
           <Button type="button" onClick={() => onDelete1(id)}>Delete</Button>
           </listItem>
        ))}
         </listCard> 
           </Box>
    
        );


}
Hist.propTypes = {
 
    history:propTypes.shape ({
        type: propTypes.number.isRequired,
        time: propTypes.string.isRequired,
        id:propTypes.string.isRequired,
       
   }),
   onDelete1: propTypes.func.isRequired,
}