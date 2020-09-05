import React from 'react';
import './header.scss'
import Nav from '../Header'


class Header extends React.Component{


	render(){
  return (
    <div className="Header">
      <section class="hero">
  <header id="header">
  <Nav/>
  </header>
  <header class="hero-header">
    <h1 class="hero-title">Need A Web App?</h1>
  </header>
  <footer class="hero-footer">
    <a class="button button-primary" href='tel:+12402737952'>Call</a>
    <a class="button " href='mailto:thisguycodez@gmail.com'>Email</a>
  </footer>
</section>

    </div>
  );
	}
}

export default Header
