import React, { Component } from 'react';

import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import * as options from '../../store/actions';
import { connect } from 'react-redux'
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/favico.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          className="logo"
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

       
        <Nav className="ml-auto" navbar>
          {/*  Notifications */}
       {/*    <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          {/*   User */}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
            
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Cerrar Sesión</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      {/*   <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state =>({
	user : state.ur.user,
	notifications : state.ur.notifications
})

const mapDispatchToProps = dispatch => ({

	setAll: (ingredients, totalPrice)=> dispatch({
	 		type: options.setAll,
	 		ingredients: ingredients,
	 		totalPrice: totalPrice
	 }),
	addIngredient: (key) => dispatch({type: options.add , key: key }),
	/*removeIngredient: (ingredients, totalPrice) => dispatch({
			type: options.remove ,
			ingredients: ingredients,
			totalPrice: totalPrice
	}),*/
})
DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

/* export default DefaultHeader; */
export default connect(mapStateToProps,mapDispatchToProps)(DefaultHeader);