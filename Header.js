import React from 'react';
import {Switch, Route} from "react-router-dom";
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import img from "../files/img.png"
import {onSearchButtonClickActionCreator, onSearchValueChangeActionCreator} from "../redux/HeaderReducer";
import HomeContainer from "./home/HomeContainer";
import CartContainer from "./cart/CartContainer";
import CSS_Classes from './header.module.css';




const Header = (props) => {
    let onSearchValueChange = event => {
        let action = onSearchValueChangeActionCreator(searchEl.current.value)
        props.dispatch(action)
    }
    let onButtonClick = event => {
        let action = onSearchButtonClickActionCreator()
        props.dispatch(action)
    }

    let searchEl = React.createRef()
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" variant="light" className={CSS_Classes.header}>
                <Container>
                    <Navbar.Brand>
                        <img alt='не удалось загрузить изображение'
                             src={img}
                             className={CSS_Classes.logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mr-auto'>
                            <Nav.Link href='/' className={CSS_Classes.home}>Главная</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Form.Control type="text" placeholder="Поиск"
                                          onChange={event => onSearchValueChange(event)}
                                          className='mr-sm-2'
                                          // value={props.state.header.searchValue}
                                          ref={searchEl}
                            />
                            <Button className={CSS_Classes.button} onClick={event => onButtonClick(event)}>Поиск</Button>
                        </Form>
                        <Nav>
                            <Nav.Link href="/cart">
                                <svg xmlns="../files/bag.svg" width="25" height="25" fill="white"
                                     className="bi bi-bag" viewBox="0 0 16 16">
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                </svg>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path="/" render={()=> <HomeContainer />}/>
                <Route path="/cart" render={()=> <CartContainer />}/>
            </Switch>
        </div>
    );
};

export default Header;