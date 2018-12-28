import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className = "show-grid">
            <Col xs={12} md={8} style = {{backgroundColor : 'red'}}>
              <code>{'<Col xs={12} md={8} />'};</code>
            </Col>
            <Col xs={6} md={4} style = {{backgroundColor : 'yellow'}}>
              <code>{'<Col xs={6} md={4} />'};</code>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default HomePage;