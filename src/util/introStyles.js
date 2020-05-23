import styled from 'styled-components'


export const Block = styled.div`
padding-top:50px;
flex:1;
display:flex;
-webkit-flex-direction:column;
flex-direction:column;
-webkit-justify-content:flex-start;
-webkit-align-items:flex-start;
justify-content:flex-start;
align-items:flex-start;
-webkit-text-fill-color:azure;
color:azure;



`


export const Row = styled.div`
padding-top:50px;
flex:1;
display:flex;
-webkit-flex-direction:row;
flex-direction:row;
-webkit-text-fill-color:azure;
color:azure;
-webkit-grid-gap:10px;
grid-gap:10px;





@media screen and (max-width:500px){
-webkit-flex-direction:column;
flex-direction:column;
}





@media screen and (max-width:900px){

figure{
margin-top:-50px;
}

}


`


export const introCard = {backgroundColor:'rgba(0,0,0,.5)',WebkitTextFillColor:'azure',color:'azure',border:'double rgba(250,250,250,.5)',WebkitBoxShadow:'2px 0 10px #888',boxShadow:'2px 0 10px #888'}
