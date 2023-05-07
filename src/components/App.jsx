import React, {Component} from 'react';
import  data from './Table/data.json';
import {Tables} from './Table/Table';
import { Container } from './ButtonAdd/ButtonAdd.styled';
import { ContactForm } from './ButtonAdd/ButtonAdd';
//import { type } from '@testing-library/user-event/dist/type';
//let circle = prompt("How many perrot output 1 - 3", 4);
//let circle = 0;
//let imageUrlm  = ["https://a-z-animals.com/media/2018/09/Parrot-macaw-close-up.jpg", "https://static.educalingo.com/img/en/800/parrot.jpg", "https://www.omlet.co.uk/images/originals/fischer's-lovebird.jpg"];

//let urll = ["","",""];
//let gogo = [0,1,2];
//for(let i = 0;i< circle-1;i++){
  
//urll[i] = imageUrlm[i];
//}
//export const App1 = () =>{
  //if(circle > 0)
//return(
//let informationOnTable = new Map();
//informationOnTable.set("type-maslo","30d");
//informationOnTable.delete("30d");
//informationOnTable.has("30d");

//<img src = {urll}/>    

  //i = i +1;
 /* render(){
    return(

<img src = {imageUrlm[i]} alt = {"ddcdx"} width={240}/>

    );


  }*/
 
 /* constructor(){
super();
this.state ={
  value: 0 
};}
  const updateFeedback  = () => {
    this.setState(set => ({
  value: set.value + 1,
  
  }));  
  };
*/
export class App extends Component {
  state = {
    name:'',
    number: ''  
      };
  
 
  
  //  for(let i = 0 ; i < 100000000000 ; i++){
 //   <img src ={imageUrl[circle]}/> 
 // for(let i = 0;i<circle;i=i+
//urll.forEach(function (q,i,urll) {});
/*state = {
value: 0

};
gg = evt =>{
  this.setState({
value: +1,
});
console.log(value);
return value;

};
*/
  //);
  
 /* FormSubmitHandler = ({ type }) => {
    const contact = {
      type
    };
  }*/
  //FormSubmitHandler = ()=>{
  
  AddItem = (name,number) =>{
    // const {ParamItem} = this.state;
    this.setState({data: []});
    const Item = {
       type: this.state.name,
       duration: this.state.number
    };
 this.setState(prevState =>{
 return { data: [{Item} , ...prevState.data]};
 });
 alert(this.state.name);
 console.log(this.state.name,this.state.number);
 }


  
    render() {
   return (  
  <Container>
      

<ContactForm onSubmit={this.AddItem} AddItem = {data}/>
   <Tables data={data}/> 
    </Container>    
); 
    }
  }
//root.render(App);
// <Form title ='Добавити тип тех огляду' onSubmit = {this.FormSubmitHandler}></Form>    
//ReactDOM.render(element, document.getElementById('root'));
           //Image: url("https://a-z-animals.co
  //--circle;
  //console.log(circle);
        
//}
//void d (i){
//  <img src ={imageUrl[circle]}/>

  


