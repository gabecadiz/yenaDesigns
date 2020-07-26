import React, { Component } from 'react';

class About extends Component {
  state = {
    projectTitle: '',
  };
  componentDidMount = () => {
    console.log(this.props);
    const {
      match: {
        params: { project },
      },
    } = this.props;
    this.setState({
      projectTitle: project,
    });
  };
  render() {
    const { projectTitle } = this.state;
    return (
      <div>
        <div className="work-project">
          <header>WORK PROJECT</header>
          <h1>{projectTitle}</h1>
        </div>
      </div>
    );
  }
}

export default About;
