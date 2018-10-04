import styled from 'styled-components';

const Header = styled.div`
background-color:rgb(236, 247, 249);
margin-top:-15px;
padding:10px;
display:flex;
justify-content:space-between;
content-align:center;
items-align:center;
`

const Counter = styled.div`
color:black;
margin:auto 0;
font-weight:bold;
font-size:16px;
letter-spacing:1px;
`

const HighScore = styled.div`
color:green
margin:auto 0;
font-weight:bold;
font-size:16px;
letter-spacing:1px;
`

export {Header, Counter, HighScore}