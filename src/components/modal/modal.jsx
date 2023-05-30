import  { Component} from 'react';
import ReactDOM from 'react-dom';

/*
import propTypes from 'prop-types';
import {  Item } from './modal.styled';
function tick(){
  const elem =(
  <h2>{new Date().toLocaleTimeString()}</h2>
  );
  ReactDOM.render(
    elem,
    document.getElementById('root')
  );
  }
  setInterval(tick, 1000);

/*
export default class Clock extends Component {

constructor(propTypes){
  super(propTypes);
this.state = {realTime: new Date()};
}
componentDidMount(){
this.timerID = setInterval(() => this.tick(),10000);
}
componentWillUnmount(){
clearInterval(this.timerID);
}
tick(){
this.setState({realTime: new Date()});

}

render(){
const{realTime}= this.state;
const sec = realTime.getSeconds();
return(
  <>
<Item>{sec}</Item>
</>
);
}

}

//import { Overlay, ModalWindow } from "./Modal.Styled";

//export const  Modal = ({onModalClose, onModalOpen }) => {
 /* useEffect(() => { 
//  const closeModalOnEsc = e => {
    if (e.code === "Escape") {
      onModalClose('');
    }
  }
 
  
 

    window.addEventListener("keydown", closeModalOnEsc);
  
return () => {
   
    window.removeEventListener("keydown", closeModalOnEsc);
  };
},
 [onModalClose]);



  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
};


  return (
    <button onClick={handleBackdropClick}>
      
        
      
    </button>
  );
};
*/
/*
const Modal = (props) => {
const [show,setshow]=useState(false);
const handleClose = () => setshow(false);
const handleShow = () => setshow(true);

return (
  <Overlay className="overlay" onClick={handleShow}>
<button onClick={handleShow}>jjjj</button>
{show && (
<div className='modal'>
  <span className='close' onClick={handleClose}>
    </span>
    {props.children}
    </div>
)}
</Overlay>
);

};


Modal.propTypes = {
};
export default Modal;*/