import React, {Component} from 'react';
//import data from './data.json';
//AddType(evt){
   //import  data from 'C:/lab-1-/src/components/data.json';
   import namedata from './ButtonAdd'
   import numberdata from './ButtonAdd'
    import {Container , Button, Form, Label } from "./ButtonAdd.styled";

//import { Title, Container , Button, Form, Label } from "./ButtonAdd.styled";
///Board.set();


//}
//export const namedata = '';
//export const numberdata = '';
export default class ContactForm extends Component{
    state = {
         
        name: '',
        number: ''
      } 
      handleChange = (e) => {

        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
               });
                      
        //       alert(this.namedata,this.numberdata);

                  };
    
    handleSubmit = (e) => {
   ///     alert(this.state.name);
       // e.preventDefault()
       this.props.onSubmit(this.state.name, this.state.number);      
       e.preventDefault();
       this.setState({ name: '', number: '' });                    
               // = this.state.name.toString();
               // = this.state.number.toString();
               
           //    alert(this.state.namedata);
           
              //  this.props.onSubmit(this.state);
                 
               
              
//Board.set(name.toString(),number.toString());
//this.AddItem(this.name,this.number)
    }
    dido = () => {
        
    }
/*    handleSub= (e)=>{

this.setState({name: ''})
    }
  */  
render(){
    
   return(
    
    <Container>
        <Form onSubmit={this.handleSubmit}>
        
            <Label>Type of service</Label>
        <input
type="text"
name="name"
onChange={this.handleChange}
value={this.state.name}
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required

/> 
<Label>Duration</Label>
<input
type="tel"
name="number"
onChange={this.handleChange}
value={this.state.number}
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
/>

<Button type="submit" onClick={this.dido}>Save data</Button>
                
        </Form>
        </Container>
   
);

};
    };


    /*state = {
        type: ''
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({ type: '' });
    };
    render (){
    return(
<Form onSubmit={this.handleSubmit}>
<lable>
<input type1 = "text" value={this.state.type} ></input>

</lable>
</Form>
    );

    };*/

/*     
    state = {
        
        name: '',
        number: ''
      }
      handleChange = (e) => { 
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,

        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({ name: '', number: '' });
    };


 render () { 
    
    return (
                <Form onSubmit={this.handleSubmit}>
                    
                <input
  type="text"
  name="name"
  value={this.state.name}
  onChange={this.handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  
/> 
<Label>Number</Label>
<input
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<Button type="submit">Add contact</Button>
                </Form>
          
    )
    }
};*/