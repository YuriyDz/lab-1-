import styled from 'styled-components';

export const listCard = styled.ul`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
`;
export const Button = styled.button`
margin-top: 20px;
padding: 15px 25px;
cursor: pointer
border-radius: 5px
border: 1px solid white;
margin-right: 30;
background: gray`;

export const Item = styled.p`
  margin-right: 10px;
  
`;
export const listItem = styled.li`
color: blue;
width: 100px;
heigth: 30px;
color: blue;
  margin-bottom: 67px;
  font-size:16px;
  align-items: center;
  justify-content: center;
`;
export const Box = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  margin: 100px auto;
  border: 15px solid white;
  background-color: blue ;
`;