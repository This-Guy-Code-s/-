import styled from 'styled-components'


export const Err = styled.span`
color:red;
-webkit-text-fill-color:red;
`

export const Pass = styled.span`
color:green;
-webkit-text-fill-color:green;
`



export const pulse = {
WebkitTextFillColor:"#000",
fontWeight:"bolder",
fontSize:"1.4rem"
}


export const middle = {
backgroundColor:'rgba(0,0,0,0)',
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
}


export let formBoxh ={
	margin:"0",
	padding:"0",
backgroundColor:'rgba(0,0,0,0)',
WebkitTextFillColor:'#fff',
color:'#fff',
border:'double #333 ',
borderTop:'none',
borderRight:'none',
display:"flex",
flexDirection:'column',
justifyContent:"center",
alignItems:"flex-start"
}


export const formio = {
backgroundColor:'rgba(0,0,0,0.4)',
WebkitTextFillColor:'#fff',
color:'#fff',
padding:"0px 10px",
width:"320px"
}

export const formToats = {
backgroundColor:'rgba(0,0,0,0)',

}

export const formToatsHeader = {
backgroundColor:'rgba(250,250,250,.5)',
fontSize:'1rem',
fontWeight:'bolder',
borderLeft:'double #000',
borderTopLeftRadius:"0%"


}

export const formBtn = {
backgroundColor:"rgba(0,0,0,.2)",
border:'double azure',
fontSize:'1.3rem',
cursor: "pointer",
marginBottom:"15px"
}


export const conBtn = {
backgroundColor:"rgba(0,0,0,.5)",
border:'double azure',
fontSize:window.innerWidth<=500?'1.5rem':'1.8rem',
cursor: "pointer",
marginBottom:"20px"
}

export const conLink = {
WebkitTextFillColor:'#fff',
color:'#fff',
textShadow:'0 0 3px #333 ',

}



