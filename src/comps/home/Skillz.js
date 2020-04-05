import React from 'react'
import styled from 'styled-components'




const Block = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:flex-start;
alig-items:flex-start;
-webkit-text-fill-color:azure;



@media(max-width:500px){
justify-content:center;
flex-direction:row;
width:100%;
}
`


const Blockk = styled.div`
padding-top:50px;
flex:1;
display:flex;
flex-direction:column;
justify-content:flex-start;
alig-items:flex-start;
-webkit-text-fill-color:azure;



@media(max-width:500px){
justify-content:center;
flex-direction:row;
width:100%;
}

`

const Row = styled.div`
padding-top:25px;
flex:1;
display:flex;
flex-direction:row;
-webkit-text-fill-color:azure;
justify-content:space-between;
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





const SkillzCard = styled.div`
height:125px;
	width:125px;
	background-color:rgba(0,0,0,.5);
	-webkit-text-fill-color:azure;
	border:double rgba(250,250,250,.5);
 	box-rhadow:0 0 10px #888;
 	border-radius:50%;
 	padding:15px 10px;
 	display:flex;
 	justify-content:center;
 	align-items:center;

@media(max-width:500px){
height:110px;
width:110px;
}

`





class Skillz extends React.Component{
	
	render(){
	return(
		<div>
		
				<Blockk><figure>
		<i className="fas fa-layer-group"
		 style={{fontSize:'2.3rem'}}></i>
		<figcaption>My Stack</figcaption>
		</figure></Blockk>
		<Block>

	

		<Row>
		<SkillzCard className='skillzAnime'>
		<figure>
		<i className="fab fa-html5"></i>
		<figcaption>
		HTML5
		</figcaption>
		</figure>
		</SkillzCard>

		
		<SkillzCard className='skillzAnime'>
		<figure>
		<i className="fab fa-css3-alt" ></i>
		<figcaption>
		CSS3
		</figcaption>
		</figure>
		</SkillzCard>

		
		<SkillzCard className='skillzAnime'>
		<figure>
		<i className="fab fa-bootstrap" ></i>
		<figcaption>
		Bootstrap
		</figcaption>
		</figure>
		</SkillzCard>

		<SkillzCard className='skillzAnime'>
		<figure>
		<i className="fab fa-figma" ></i>
		<figcaption>
		Figma
		</figcaption>
		</figure>
		</SkillzCard>
		
	 	</Row>



		<Row>

		
		<SkillzCard className='skillzAnime'>
		<figure>
		<i className="fab fa-less" ></i>
		<figcaption>
		CSS Compiler
		</figcaption>
		</figure>
		</SkillzCard>



		
		<SkillzCard className='skillzAnime'>
		<figure>
		<i className="fab fa-js-square" ></i>
		<figcaption>
		Javascript
		</figcaption>
		</figure>
		</SkillzCard>


		
		<SkillzCard className='skillzAnime'>
		<figure>
		<i className="fab fa-react" ></i>
		<figcaption>
		React.js
		</figcaption>
		</figure>
		</SkillzCard>


			<SkillzCard className='skillzAnime'>
			<figure>
		<i className="fas fa-atom" ></i>
		<figcaption>
		React-Redux
		</figcaption>
		</figure>
			</SkillzCard>
	 	</Row>


	 	<Row>
	
		
		<SkillzCard className='skillzAnime'>
		<figure>
		<i className="fab fa-node-js" ></i>
		<figcaption>
		Express.js
		</figcaption>
		</figure>
		</SkillzCard>

		
		<SkillzCard className='skillzAnime'>
		<figure>
		<i className="fab fa-node" ></i>
		<figcaption>
		Node.js
		</figcaption>
		</figure>
		</SkillzCard>


		<SkillzCard className='skillzAnime'>
			<figure>
		<i className="fas fa-database" ></i>
		<figcaption>
		Knex(Sqlite3)
		</figcaption>
		</figure>
		</SkillzCard>




		<SkillzCard className='skillzAnime'>
			<figure>
		<i className="fas fa-database" ></i>
		<figcaption>
		mySql
		</figcaption>
		</figure>
		</SkillzCard>

	 	</Row>

      </Block>
      </div>
	)

	}
}



export default Skillz