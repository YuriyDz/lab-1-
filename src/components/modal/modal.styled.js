import styled from "styled-components";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2; //1200
`;
export const Modal = styled.div`
  max-width: 65vw;
  max-height: 100vh;
`;
export const Item = styled.p`
  margin-right: 10px;
  
`;