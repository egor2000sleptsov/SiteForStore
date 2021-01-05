import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import Home from "./Home";
import Cart from "./Cart";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="sm" bg="primary" variant="light" fixed="top">
                    <Container>
                        <Navbar.Brand>
                            Store
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responisive-navbar-nav"/>
                        <Navbar.Collapse id="responisive-navbar-nav">
                            <Nav className="ma-auto">
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/cart"> Корзина </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/cart" component={Cart} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Header;