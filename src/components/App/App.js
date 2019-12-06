import React from 'react';
import axios from 'axios';
import { Card } from '../common/Card';
import TeamMember from '../TeamMember';
import NewTeamMember from '../NewTeamMember';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      await this.fetchInitialData();
    } catch (error) {
      // try again after half a second if fails due to race condition
      console.log('retrying initial data request...');
      setTimeout(async () => {
        await this.fetchInitialData();
      }, 500);
    }
  }

  async fetchInitialData() {
    const response = await axios.get('/team');
    this.setState({
      team: response.data,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="app">
        <div className="team-grid" />
        {this.state.team.map((member) => (
          <Card key={member.id}>
            <TeamMember
              name={`${member.firstName} ${member.lastName}`}
              title={member.title}
              photoUrl={member.photoUrl}
              story={member.story}
              favoriteColor={member.favoriteColor}
            />
          </Card>
        ))}
        {/* Make this new team member link to your form! */}
        <NewTeamMember refetchData={this.fetchInitialData.bind(this)} />
      </div>
    );
  }
}

export default App;
