import React, { useContext, useState } from 'react';
import '../UserProfile/UserProfile.css'
import AuthContext from '../Login/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

function UserProfile() {
  let {user, logoutUser} = useContext(AuthContext);
  const [matches, setMatches] = useState([]);
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [noMatchFound, setNoMatchFound] = useState(false);
  const [matchDate, setMatchDate] = useState('');
  const [stadiumMatch, setStadium] = useState(''); 

  const fetchMatches = () => {
    axios.post('http://127.0.0.1:8000/api/search/', { 
      home_team_name: homeTeam,
       away_team_name: awayTeam,
       date: matchDate,
       stadium: stadiumMatch,

      })
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
  const handleSubmit = (e) => {
    e.preventDefault(); // Запобігає оновленню сторінки при відправленні форми
    fetchMatches();
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
  const handleDateChange = (e) => {
    setMatchDate(e.target.value);
  };
  
  const handleStadiumChange = (e) => {
    setStadium(e.target.value);
  };

  return (
    <div className="container">
      {user &&   <p>Welcome {user.username}</p>}
      {user ? (
        <p onClick={logoutUser}>Logout</p>
      ):(
        <Link to="/login"></Link>
      )}

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-fields">
          <input type="text" 
          placeholder="Team 1" 
          className="input"
          value={homeTeam}
          onChange={handleTeamAChange}
          />
          <input 
          type="text"
          placeholder="Team 2" 
          className="input"
          value={awayTeam}
          onChange={handleTeamBChange}
           />
          <input 
          type="date"
          value={matchDate} 
          onChange={handleDateChange} />

          <input 
          type="text" 
          placeholder="Stadium" 
          value={stadiumMatch} 
          onChange={handleStadiumChange} 
          />
        </div>
        <button type="submit" className="search-btn" onClick={handleViewClick}>Search</button>
      </form>
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
              <br />
              <span>Стадіон: {match.stadium}</span>
            </div>
          ))}
        </div>
      )}
      {noMatchFound && <p>Матч не знайдено</p>}
      {/* Результати пошуку та інші компоненти можна додати тут */}
    </div>
  );
}

export default UserProfile;
