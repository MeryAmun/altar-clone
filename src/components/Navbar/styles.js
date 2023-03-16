import styled from "styled-components";

export const NavSmall = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: #0044FF;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
width: 350px;
z-index: 16;
list-style: none;
padding: 20px;
text-align: start;
transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
transition: transform 0.2s;
  }
  `