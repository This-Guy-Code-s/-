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
export let formBoxh ={margin:"0",padding:"0",backgroundColor:'rgba(0,0,0,0)',WebkitTextFillColor:'#fff',color:'#fff',display:"flex",flexDirection:'column',border:'none',justifyContent:"center",alignItems:"flex-start",boxShadow:'0 0 10px rgba(0,0,0,0)',borderLeft:'double rgba(0,78,204,.7)'}
export const formio = {backgroundColor:'rgba(0,0,0,0.75)',WebkitTextFillColor:'#fff',color:'#fff',padding:"0px 10px",width:"100%",boxShadow:'0 0 10px rgba(0,0,0,0)',borderRadius:'0',border:'none'}
export const formToats = {backgroundColor:'rgba(0,0,0,0)',marginTop:'50px'}
export const formToatsHeader = {backgroundColor:'rgba(250,250,250,.8)',fontSize:'1rem',fontWeight:'bolder',borderLeft:'double #000',borderRadius:"0%",width:'100%',textAlign:'center',display:'block'}
export const formBtn = {backgroundColor:"rgba(0,0,0,.2)",border:'double rgba(0, 78, 204,.7)',fontSize:'1.3rem',cursor: "pointer",marginBottom:"15px",boxShadow:'0 0 10px rgba(0,0,0,0)'}
export const conBtn = {backgroundColor:"rgba(0,0,0,.5)",border:'double azure',cursor: "pointer",marginBottom:"20px"}
export const conLink = {WebkitTextFillColor:'#fff',color:'#fff',textShadow:'0 0 3px #333 ',display:'flex',alignItems:'center',justifyContent:'center',gridGap:'3px',fontSize:window.innerWidth<=500?'1.5rem':'1.8rem',margin:'0'}
export const inputVise = {padding:'10px',backgroundColor:'rgba(0,0,0,0)',border:'none',borderLeft:'solid rgba(0, 78, 204,.7)',borderTop:'solid .5px rgba(0,78,204,.7)',borderBottom:'solid rgba(0, 78, 204,.7)',fontWeight:'bolder',boxShadow:'0 0 10px rgba(0,0,0,0)'}



