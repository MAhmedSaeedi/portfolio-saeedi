import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Muhammad Ahmed Saeedi - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
              </div>
            </Col>
            <Col md="6">
            
              <div className="fadein">
                <p>My name is Muhammad Ahmed Saeedi and I am an experienced software engineer. </p>
                <p>
                I have a Master's degree in Systems Engineering and have experience of working on a wide range of technologies and 
                projects from Java development for hostel management to modern mobile and web applications in React and Angular. 
                Furthermore, i have also worked on Blockchain technology.
                </p>
                <p>
                Throughout my career, I have acquired advanced technical knowledge and the ability to explain 
                programming topics clearly and in detail to a broad audience.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
