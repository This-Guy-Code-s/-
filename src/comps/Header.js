import React from 'react';
import './header.scss'
import Nav from '../Header'


class Header extends React.Component{


	render(){
  return (
    <div className="Header">
      <section className="hero">
  <div id="header">
  <Nav/>
  </div>
  <div className="hero-header">
    <h1 className="hero-title">Need A Web App?</h1>
  </div>  
  <footer className="hero-footer">
    <a className="button button-primary" href='tel:+12402737952'>Call</a>
    <a className="button " href='mailto:thisguycodez@gmail.com'>Email</a>
  </footer>
</section>

    </div>
  );
	}
}

export default Header
