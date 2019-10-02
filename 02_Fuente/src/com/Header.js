import React, { Component } from 'react'
import{Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Container,Row,Col,Jumbotron,Button} from 'reactstrap'
//import user from '../ico/user.svg'
// import protection from '../ico/protection.svg'
//import atrabajar from '../ico/atrabajar.svg'
import checkbox from '../ico/checkbox.svg'
import './header.css'

export default class Header extends Component {
  state = {
    isOpen: false
  }

toggle = () => {
  this.setState({
      isOpen: !this.state.isOpen
  })
}
  render() {
    return (
      <div>
        <div>
                <Navbar className="cab-navbar" color="inverse" position="fixed" light expand="md" id="">
                    <img src={checkbox} className="logo" alt="logo"/>
                    <NavbarBrand color="#4267B2" href="/">atrabajar.pe</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">{/*<img src={user} className="user" alt="user" />*/}Perfil</NavLink>    
                                </NavItem>
                                <NavItem>    
                                <NavLink href="/">MiCV</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/">Postulaciones</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/">Notificaciones</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/">Alertas</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/">Privacidad</NavLink>  
                                </NavItem> 
                                <NavItem>                  
                                <NavLink href="" className="text-danger">Salir</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="display-4"  id='txtJumbo'>Publicidad de Empresa Patrocinadora </h1>
                                <br/>
                                <p>
                                    <Button
                                        tag="a"
                                        outline color="danger"
                                        size="large"
                                        href="/"
                                        target="_blank"
                                    >
                                        Vínculo hacia las postulaciones del patrocinador
                                    </Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
      </div>
    )
  }
}