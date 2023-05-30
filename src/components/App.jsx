import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import  moment  from 'react-moment';
import SignupForm from './ButtonAdd/regForm/regForm.jsx';
import 'react-toastify/dist/ReactToastify.css'
//import  Find from './FinderServise/FinderServise';
import ContactForm from './ButtonAdd/ButtonAdd.jsx';
import {Hist} from './Table/History.jsx'; 
//import data from './Table/data.json';
import {Tables} from './Table/Table';
import  Clock from './modal/modal.jsx';
import { Button } from './ButtonAdd/ButtonAdd.styled';
//import { Container } from './ButtonAdd/ButtonAdd.styled';
import { namedata } from './ButtonAdd/ButtonAdd.jsx';
import { numberdata } from './ButtonAdd/ButtonAdd.jsx';
import Login from './login form/loginPage';
//import { ContactForm } from './ButtonAdd/ButtonAdd';
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
//let second = Number(moment().get('second'));

let j = 1;
const data = [
{id: "1",type: "tttt", duration: "10"}
];
const historyService = [
{id: "1", type1: "tooService", time: "12.31.2023"}
];

export class App extends Component {
 
  state = {
    data: data,
      name: '',
      number: '',
      openHistory: 1,      
      histor: historyService,
     realTime: new Date().getSeconds(),
     timeLate: 0,
    //name:'',
    //number: ''  
      };

 FormhandleSubmit = (name,number)=>{
    this.setState({
      name: name,
      number: number
         });
       
      
    //alert(this.state.name)
  }
 
  delete = (id) => {
    //alert(id.toString());
    this.setState(prevState => ({
      data: prevState.data.filter(cards => cards.id !== id),
    }));
  };
change = (id2) => {
 //alert(id2);      
 const Item = {
   id: id2,
   type: this.state.name,
   duration: this.state.number
};
const checkContact = this.state.data.find((contact) => contact.type.toLowerCase() === Item.type.toLowerCase());
        if (checkContact || Item.type == "" || Item.duration == "") {
          alert("is already in contacts.");
          return;
        }
//alert(this.state.number);
const changeElem = this.state.data.map(bogo => {
if(bogo.id === Item.id){
 
  return Item;
}else{
  return bogo}
  });
this.setState({data: changeElem});
};

delet2 = (id) =>{
  this.setState(prevState => ({
    histor: prevState.histor.filter(history => history.id !== id),
  }));


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
  componentDidMount() {
    const data = localStorage.getItem('data');
    const parsedData = JSON.parse(data);
    if (parsedData !== null) {
      this.setState({ data: parsedData }) 
      console.log(parsedData);
    }
    const historyService = localStorage.getItem('historyService');
    const parsedHistoryService = JSON.parse(historyService);
    if (parsedHistoryService !== null) {
      this.setState({ historyService: parsedHistoryService }) 
    }
    console.log(parsedHistoryService)
     }
     componentDidUpdate(prevProps, prevState) {
      if (this.state.data !== prevState.data) {
        localStorage.setItem ('data', JSON.stringify(this.state.data))
      }
      if (this.state.historyService !== prevState.historyService) {
        localStorage.setItem ('historyService', JSON.stringify(this.state.historyService))
      }
     
     }
  
   Find = (timei) => { 
    //alert(time.toString());
  
    
   this.state.data.forEach(element => {
    //  alert(tome.toString());
      if(Number(timei)%(Number(element.duration)) === 0){
        //alert(element.type.toString());
         const Item1 = {
           id: nanoid(),
           type1: element.type,
           time: new Date().toLocaleTimeString(),
          };
         // const dido = this.state.histor.find((kiki)=> kiki.time.toLowerCase() === Item1.time.toLowerCase());
          const checkContact = this.state.histor.find((contact) => (contact.type1.toLowerCase() === Item1.type1.toLowerCase() && contact.time.toLowerCase() === Item1.time.toLowerCase()));
          if (checkContact) {
           
          }
          else{
            this.setState(prevState => ({
            histor: [Item1 , ...prevState.histor],
        }))
      }
     //alert(`Visit service in ${element.type.toString()}`);
    
      toast.error(`Visit service in ${element.type.toString()}`);
      }
      
      //alert(element.type.toString());
    });
   
  /*  this.setState(prevState => ({
      histor: [ddd , ...prevState.histor],
  }))*/
/*ddd.forEach(fff => {
alert(fff.type1.toString());
*/
/*const changeEle = this.state.data.map(element => {
  
    if(Number(timei)%(Number(element.duration)) == 0){
      //alert(element.type.toString());
       const Item1 = {
         id: nanoid(),
         type1: element.type,
         time: new Date().toLocaleTimeString(),
        };
    return Item1;
      }
    }
    );
    */



};

  Split = () => {
      this.setState({openHistory: 0});
    }
  SplitRedo = () => {
    this.setState({openHistory: 1});
  }
  //FormSubmitHandler = ()=>{
    AddItem = () => {
      

        const Item = {
          id: nanoid(),
           type: this.state.name,
           duration: this.state.number
        };
        const checkContact = this.state.data.find((contact) => contact.type.toLowerCase() === Item.type.toLowerCase());
        if (checkContact || Item.type == "" || Item.duration == "") {
          alert("is already in contacts.");
          return;
        }
     this.setState(prevState => ({
         data: [Item , ...prevState.data],
     }))
    //
     
      } 
      componentDidMount(){
    setInterval(() => this.setState({ realTime: this.state.realTime+1 }), 1000);
      }
    
     // const dateToFormat = '1976-04-19T12:59-0500'; 
          
         //  if((Number(second)%10) == 0){
            
        //    this.Find(this.state.data, 0);
         //  }     
          // else{
            
          // }
          //khgllllllllllllllllllllllllllll
render(){     
  if((Number(this.state.realTime)%10) === 0){
//alert((Number(this.state.realTime)/10).toString());
    //this.Find(new Date().getSeconds());
  }     
      if(this.state.openHistory ==1){
       
   return (
    
  <>

<SignupForm/>
<Login/>
      <f>{this.state.realTime} </f>
<ContactForm onSubmit={this.FormhandleSubmit} />
<Button type="submit" onClick={this.AddItem}>Add service </Button>
<Button type="submit" onClick={this.Split}>Open history</Button>
   <Tables cards={this.state.data} onDelete={this.delete}onChange={this.change}>

    </Tables>
    <ToastContainer />
    </>
          
    
);
 }
 else{
  
return(
<>
 
<Button type='submit' onClick={this.SplitRedo}>Back</Button>
<Hist history={this.state.histor} onDelete1={this.delet2}>

  </Hist>
  <ToastContainer />
</>
);

 }
     
    
    }
 
      


  }

  


