import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const userRank = 3; // Example rank
  const userScore = 125.6; // Example score

  const leaderboardData = [
    { rank: 1, userId: 'user1', score: 200.5 },
    { rank: 2, userId: 'user2', score: 190.3 },
    { rank: 3, userId: 'user3', score: 180.4 },
    { rank: 4, userId: 'user4', score: 170.2 },
    { rank: 5, userId: 'user5', score: 160.1 },
  ];

  return (
    <div className="leaderboard-container">
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User ID</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((data) => (
              <tr key={data.rank}>
                <td>{data.rank}</td>
                <td>{data.userId}</td>
                <td>{data.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="user-card">
        <h3>Your Rank: {userRank}</h3>
        <p>Your Score: {userScore}</p>
      </div>
    </div>
  );
};

export default Leaderboard;
