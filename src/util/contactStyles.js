import styled from 'styled-components'


export const Err = styled.span`
color:red;
-webkit-text-fill-color:red;
`

export const Pass = styled.span`
color:green;
-webkit-text-fill-color:green;
`

 

export const pulse = {WebkitTextFillColor:"#000",fontWeight:"bolder",fontSize:window.innerWidth<=700?"1rem":"1.25rem",textAlign:'center',width:'100%'}
export const middle = {backgroundColor:'rgba(0,0,0,0)',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}
export let formBoxh ={margin:"0",padding:"0",backgroundColor:'rgba(0,0,0,0)',WebkitTextFillColor:'#fff',color:'#fff',border:'double #333 ',borderTop:'none',borderRight:'none',display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"flex-start",boxShadow:'-3px 3px 5px #000',borderLeft:'double rgba(0,78,204,.7)'}
export const formio = {backgroundColor:'rgba(0,0,0,0.75)',WebkitTextFillColor:'#fff',color:'#fff',padding:"0px 10px",width:window.innerWidth<=450?"300px":"100%",boxShadow:'-3px 3px 5px #000',borderRadius:'0',borderLeft:'double rgba(0,78,204,.7)',borderBottom:'double rgba(0,78,204,.7)'}
export const formToats = {backgroundColor:'rgba(0,0,0,0)'}
export const formToatsHeader = {backgroundColor:'rgba(250,250,250,.8)',fontSize:'1rem',fontWeight:'bolder',borderLeft:'double #000',borderRadius:"0%",width:'100%',textAlign:'center',display:'block'}
export const formBtn = {backgroundColor:"rgba(0,0,0,.2)",border:'double rgba(0, 78, 204,.7)',fontSize:'1.3rem',cursor: "pointer",marginBottom:"15px",boxShadow:'-3px 3px 5px #000'}
export const conBtn = {backgroundColor:"rgba(0,0,0,.5)",border:'double azure',fontSize:window.innerWidth<=500?'1.5rem':'1.8rem',cursor: "pointer",marginBottom:"20px"}
export const conLink = {WebkitTextFillColor:'#fff',color:'#fff',textShadow:'0 0 3px #333 '}
export const inputVise = {WebkitTextFillColor:'#fff',color:'#fff',backgroundColor:'rgba(0,0,0,0)',border:'none',borderLeft:'solid rgba(0, 78, 204,.7)',borderTop:'solid .5px rgba(0,78,204,.7)',borderBottom:'solid rgba(0, 78, 204,.7)',fontWeight:'bolder',boxShadow:'-3px 3px 5px #000'}



