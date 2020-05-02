import styled from 'styled-components'


export const Block = styled.div`
flex:1;
display:flex;
-webkit-flex-direction:column;
flex-direction:column;
-webkit-justify-content:flex-start;
justify-content:flex-start;
-webkit-text-fill-color:azure;
color:azure;



@media(max-width:500px){
-webkit-justify-content:center;
justify-content:center;
-webkit-flex-direction:row;
flex-direction:row;
-webkit-width:100%;
width:100%;
}
`


export const Blockk = styled.div`
padding-top:50px;
flex:1;
display:flex;
-webkit-flex-direction:column;
flex-direction:column;
-webkit-justify-content:flex-start;
justify-content:flex-start;
-webkit-text-fill-color:azure;
color:azure;



@media(max-width:500px){
-webkit-justify-content:center;
-webkit-flex-direction:row;
-webkit-width:100%;
justify-content:center;
flex-direction:row;
width:100%;
}

`

export const Row = styled.div`
padding-top:25px;
flex:1;
display:flex;
-webkit-flex-direction:row;
flex-direction:row;
-webkit-text-fill-color:azure;
color:azure;
-webkit-justify-content:space-between;
justify-content:space-between;
-webkit-align-items:center;
align-items:center;
font-size:1rem;
font-weight:bolder;


figure i{
	font-size:2rem;
}






@media(max-width:500px){
flex-direction:column;
padding:0;
}
`





export const SkillzCard = styled.div`
	-webkit-height:125px;
	-webkit-width:125px;
	height:125px;
	width:125px;
	background-color:rgba(0,0,0,.5);
	-webkit-text-fill-color:azure;
	color:azure;
	border:double rgba(250,250,250,.5);
 	-webkit-box-shadow:0 0 10px #888;
 	box-shadow:0 0 10px #888;
 	-webkit-border-radius:50%;
 	border-radius:50%;
 	padding:15px 10px;
 	display:flex;
 	-webkit-justify-content:center;
 	-webkit-align-items:center;
 	justify-content:center;
 	align-items:center;

@media(max-width:500px){
-webkit-height:110px;
-webkit-width:110px;
height:110px;
width:110px;
}

`


