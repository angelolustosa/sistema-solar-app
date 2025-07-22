// src/Planeta.jsx
export function Planeta({ name, description, image }) {
  return (
    <div className="planet-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
