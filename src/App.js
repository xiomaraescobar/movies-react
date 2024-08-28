import Form from "./Forms";
const movies = [
  {
    name: "avengers",
    available: 3,
  },
  {
    name: "terminator",
    available: 5,
  },
];

export default function App() {
  return (
    <div>
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
