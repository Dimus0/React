import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const Search = () => {
  const [matches, setMatches] = useState([]);
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [noMatchFound, setNoMatchFound] = useState(false);

  const fetchMatches = () => {
    axios.post('http://127.0.0.1:8000/api/search/', { home_team_name: homeTeam, away_team_name: awayTeam })
      .then(response => {
        if (response.data.length > 0) {
          setMatches(response.data);
          setNoMatchFound(false);
        } else {
          setMatches([]);
          setNoMatchFound(true);
        }
      })
      .catch(error => console.error(error));
  };

  const handleViewClick = () => {
    fetchMatches();
  };

  const handleTeamAChange = (e) => {
    setHomeTeam(e.target.value);
  };

  const handleTeamBChange = (e) => {
    setAwayTeam(e.target.value);
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Home"
          className="input"
          value={homeTeam}
          onChange={handleTeamAChange}
        />
        <input
          type="text"
          placeholder="Away"
          className="input"
          value={awayTeam}
          onChange={handleTeamBChange}
        />
        <button className="button" onClick={handleViewClick}>
          Search
        </button>
      </div>
      {matches.length > 0 && (
        <div className="match-list">
          {matches.map((match) => (
            <div key={match.id} className="match-info">
              <strong>
                {match.home_team.team_name} VS {match.away_team.team_name}
              </strong>
              <br />
              <span>
                {match.goal_score_home_team} : {match.goal_score_away_team}
              </span>
              <br />
              <span>Дата та час: {format(new Date(match.date), 'dd.MM.yyyy HH:mm')}</span>
            </div>
          ))}
        </div>
      )}
      {noMatchFound && <p>Матч не знайдено</p>}
    </div>
  );
};

export default Search;