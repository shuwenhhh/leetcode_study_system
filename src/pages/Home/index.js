
// import Groups from "./Groups";
// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <hr />
//       <h2>Welcome to LeetGroup</h2>
//       <Groups />
//     </div>
//   );
// }

// export default Home;

import Groups from "./Groups";
import { Button, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';

function Home() {
  const studyGroups = [
    { name: 'AlgoMasters', description: 'Mastering algorithms together', users: 120, problems: 30 },
    { name: 'Frontend Wizards', description: 'Exploring the world of front-end', users: 85, problems: 25 },
    { name: 'Backend Brigade', description: 'Backend development and more', users: 95, problems: 28 },
    { name: 'FullStack Fellowship', description: 'From front to back, all in one', users: 150, problems: 40 },
    { name: 'DataStructs Club', description: 'Data structures made easy', users: 110, problems: 35 }
  ];

  return (
    <Container style={{ marginLeft: 0 }}>
      <Row className="align-items-center">
                <Col>
                    <h1>Home</h1>
                </Col>
                <Col className="text-end">
                    <Button variant="primary">Log In/Sign Up</Button>
                </Col>
            </Row>
      <hr />
      <h2>Welcome to LeetGroup</h2>
      <p>Explore Groups</p>
      <ListGroup>
        {studyGroups.map((group, index) => (
          <ListGroupItem key={index}>
            <Row>
              <Col xs={2} md={1}>
                <img src="/images/group_profile.png" alt="Profile" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              </Col>
              <Col>
                <h5>{group.name}</h5>
                <p>{group.description}</p>
              </Col>
              <Col md="auto">
                Users: {group.users}<br />
                Problems: {group.problems}
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      <Groups />
      </Container>
    
  );
}

export default Home;

