import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilePicture from './ProfilePicture';

import './index.css';
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <Container  className="section-container" id="about">
      <Row className="h-100">
        <Col>
          <Row>
            <Col className="section-title">
              ABOUT US
            </Col>
          </Row>
          <Row>
            <Col>
              We believe in the power of design that can tell your company’s story and technology that can materialize
              your ideas. We are a hardworking and dedicated team that utilizes our experience in design and implementation
              to transform your ideas into a developed product.
            </Col>
          </Row>
          <Row>
            <Col>
              <ProfilePicture image="/ali_profile_2.png" alt="Ali's LinkedIn Profile" url="https://www.linkedin.com/in/ali-zand-bb469115/" />
            </Col>
            <Col>
              <ProfilePicture image="/polina_profile.jpeg" alt="Polina's LinkedIn Profile" url="https://www.linkedin.com/in/polina-gorshenina/" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
