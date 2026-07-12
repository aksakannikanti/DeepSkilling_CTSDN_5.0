import React from "react";

const players = [
  { name: "Sachin", score: 95 },
  { name: "Dhoni", score: 88 },
  { name: "Virat", score: 100 },
  { name: "Rohit", score: 45 },
  { name: "Rahul", score: 65 },
  { name: "Gill", score: 75 },
  { name: "Hardik", score: 60 },
  { name: "Jadeja", score: 55 },
  { name: "Ashwin", score: 82 },
  { name: "Bumrah", score: 40 },
  { name: "Shami", score: 72 }
];

function ListofPlayers() {

  const players70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <ul>
        {players.map((item) => (
          <li key={item.name}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>

      <ul>
        {players70.map((item) => (
          <li key={item.name}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ListofPlayers;