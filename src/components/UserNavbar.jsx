// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
// import { IconLogout } from '@tabler/icons-react';
// import '../css/Navbar.css';

// function UserNavbar() {
//   return (
//     <>
//       {/* <Title /> */}
//       <Navbar collapseOnSelect expand="lg" className="custom-navbar">
//         <Container>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/ourmission" style={{ color: 'white' }}>Our Mission</Nav.Link>
//               <Nav.Link href="/aboutus" style={{ color: 'white' }}>About Us</Nav.Link>
//               <NavDropdown title="Categories" id="collapsible-nav-dropdown" className="custom-nav-dropdown">
//                 <NavDropdown.Item href="/Theft" style={{ color: 'black' }}>Theft</NavDropdown.Item>
//                 <NavDropdown.Item href="/Assault" style={{ color: 'black' }}>Assault</NavDropdown.Item>
//                 <NavDropdown.Item href="/Fraud" style={{ color: 'black' }}>Fraud</NavDropdown.Item>
//                 <NavDropdown.Item href="/DrugRelatedCrimes" style={{ color: 'black' }}>
//                   Drug-Related Crimes
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="/Vandalism" style={{ color: 'black' }}>Vandalism</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav>
//             <Nav.Link href="#" style={{ color: 'white' }}>{localStorage.getItem("data2")}</Nav.Link>
//               <Nav.Link href="/" style={{ color: 'white' }}>Logout <IconLogout stroke={1.25} /></Nav.Link>
//               <Nav.Link href="/AfterLogin" style={{ color: 'white' }}>Home</Nav.Link>
//               <Nav.Link eventKey={2} href="/FAQ" style={{ color: 'white' }}>
//                 FAQ
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default UserNavbar;
