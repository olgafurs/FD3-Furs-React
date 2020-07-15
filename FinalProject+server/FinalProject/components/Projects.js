import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-elastic-carousel';

import Project from './Project';

import './Projects.css';
import './Project.css';

class Projects extends React.PureComponent {

  static propTypes = {
    
    projects:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,        
        specification: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
    ),
  };
  
  render() {

    var projectCode=this.props.projects.map( project =>
      <Project key={project.id} info={project}  />
    );

    return (
      <div className='Projects'>
      <h1>Проекты нашей компании</h1>
      <Carousel>
      {projectCode}
      </Carousel>
      </div>
    )
    ;

  }

}

export default Projects;
