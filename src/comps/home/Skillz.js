import React from 'react'

import {
	Block,
	Blockk,
	Row,
	SkillzCard
} from '../../util/skillzStyles'




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
		<i className="fab fa-less" ></i>
		<figcaption>
		CSS Compiler
		</figcaption>
		</figure>
		</SkillzCard>

	 	</Row>



		<Row>
		
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


		<SkillzCard className='skillzAnime'>
		<figure>
		<i className="fab fa-node-js" ></i>
		<figcaption>
		Express.js
		</figcaption>
		</figure>
		</SkillzCard>
	 	</Row>


	 	<Row>
		
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
		<i className="fas fa-table"></i>
		<figcaption>
		DB Design
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
		postgresql
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