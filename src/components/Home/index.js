import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './index.css';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <Container style={{ minHeight: '100vh' }}>
      <Row id="main" className="h-100">
        <Col>
          <Row>
            <Col>
              <div className="title-container">
                <div className="title-content title-creative">Creative</div>
                <div className="title-content title-design">Design</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="slogan-container">
                YOU HAVE A DREAM<br />
                WE MAKE IT COME TO LIFE
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
