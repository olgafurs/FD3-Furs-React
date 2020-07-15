import React from 'react';

import Projects from '../components/Projects';

import appData from '../appData';

class Page_Projects extends React.PureComponent {
          
  render() {

    return (
      <Projects projects={appData.projectsExamplesArr} />      
      
    );
    
  }

}
    
export default Page_Projects;
    