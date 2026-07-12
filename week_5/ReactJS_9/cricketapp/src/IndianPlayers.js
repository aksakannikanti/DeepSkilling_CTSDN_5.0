import React from "react";

const TeamPlayers = [
  "Sachin",
  "Dhoni",
  "Virat",
  "Rohit",
  "Rahul",
  "Gill"
];

export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <h3>Odd Team Players</h3>

      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}

export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <h3>Even Team Players</h3>

      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}

const T20Players = [
  "First Player",
  "Second Player",
  "Third Player"
];

const RanjiTrophyPlayers = [
  "Fourth Player",
  "Fifth Player",
  "Sixth Player"
];

export const IndianPlayers = [
  ...T20Players,
  ...RanjiTrophyPlayers
];

function IndianPlayersComponent() {

  return (
    <div>

      {OddPlayers(TeamPlayers)}

      {EvenPlayers(TeamPlayers)}

      <h3>Merged Players</h3>

      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

    </div>
  );
}

export default IndianPlayersComponent;