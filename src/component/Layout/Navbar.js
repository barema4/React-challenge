import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {getMenu} from '../../actions/MenuAction';
import { connect} from 'react-redux';
import {PropTypes} from 'prop-types';

class Navbar extends Component {
   
    
    componentWillMount() {
        this.props.getMenu();
    }
     
  render() {

      const {menu} = this.props
      let postItems;
      if (menu){
       postItems = menu.map(post => (
        <div className="card m-lg-2" key={post.id}>
        <div className="card-body"></div>
        <h3 className="card-title">{post.item}</h3>
        <p>UGX {post.price}</p>  
        </div>
    ));
     }

 return (
     <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
      <h2  className="navbar-brand">
            Fast Food Fast
          </h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            </li>
          </ul>
  
          <ul className="navbar-nav ml-auto">
            <li className="navbar-brand">
              <h2> Order Food</h2>
            </li>
            <li className="navbar-brand">
            <h2>Order History</h2>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
    <p className="lead">
                  {' '}
                  Please our dear vistors, View the list of food item and their prices below 
                </p>
    </div>
    <div>
    {postItems }
    </div>
    <footer className="bg-dark text-white mt-5 p-4 text-center">
    Copyright &copy; {new Date().getFullYear()} Fast Food Fast
  </footer>
  </div>
    
    )
  }
}
Navbar.proptype = {
    menu: PropTypes.array.isRequired,
  };
  const mapStateToProps = state =>{
      console.log(state.menu.menu.menu_list, "mapssshdyyd")
      return{
      menu: state.menu.menu.menu_list,
      
  }};


export default connect(mapStateToProps,{ getMenu })(Navbar);

