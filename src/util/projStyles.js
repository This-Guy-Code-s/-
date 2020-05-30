import styled from 'styled-components'

export const Row = styled.div`flex:1;display:flex;flex-direction:column;justify-content:space-around;align-items:center;grid-gap:50px;`;

export const cardStylez = {flex:'1',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,.5)',WebkitTextFillColor:'azure',fontSize:window.innerWidth<=700?'1.15rem':'1.4rem',fontWeight:'bolder',border:'double #4df7ff',boxShadow:'0 0 20px #5539f3'}


export const card_desc = {
	WebkitTextFillColor:'#498942',
	textShadow:'0 0 5px #000',
	width:window.innerWidth<=500?'100%':window.innerWidth>=501 && window.innerWidth<=800?'70%':'30%',
	marginLeft:window.innerWidth>=501 && window.innerWidth<=800?'15%':'0%'
}

export const cardSDiv = {
	flex:'1',
	display:'flex',
	width:'100%',height:'100%'
}