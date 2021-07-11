import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Service from './Service';

const Services = () => {
  return (
    <Container className="section-container" id="services">
      <Row>
        <Col>
          <Row>
            <Col className="section-title">
              OUR SERVICES
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Service name="design">
            Our design will reflect your company. We use the latest UI/UX design trends
            to increase customer engagement and improve conversion.
          </Service>
        </Col>
        <Col md={12} lg={6}>
          <Service name="code">
            Already have a website but need help with it? We are here to assist.
            Our services include:
            <ul>
              <li>Adding new features</li>
              <li>Updating the design</li>
              <li>Enhance User Experience</li>
              <li>Improve performance</li>
            </ul>
          </Service>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <Service name="consult">
            We provide consultation on existing and new projects. New project consultation
            fee will be applied to the project price if we continue our collaboration.
          </Service>
        </Col>
        <Col md={12} lg={6}>
          <Service name="upgrade">
            Our full-stack engineer will work closely with the designer to provide
            the look and feel that you had in mind. We provide web applications and
            responsive mobile web development. Our engineer will use the latest
            technology and best coding practices not only to make your idea come
            to life, but to also create a maintainable and expandable application.
          </Service>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
