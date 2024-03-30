import React from 'react';
import './style.css';
import { Game } from './Game';
export default function App() {
  const payload = {
    India: 'Delhi',
    Russia: 'Moscow',
    France: 'Paris',
    Italy: 'Rome',
  };
  return (
    <div>
      <Game data={payload} />
    </div>
  );
}
