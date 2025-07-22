// src/App.jsx
import { Planeta } from './components/Planeta';
import { planets } from './data/planets';
import './index.css';

export default function App() {
  return (
    <div className="app">
      <h1>Planetas do Sistema Solar 🌌</h1>
      <div className="planet-list">
        {planets.map((planet) => (
          <Planeta
            key={planet.name}
            name={planet.name}
            description={planet.description}
            image={planet.image}
          />
        ))}
      </div>
    </div>
  );
}
