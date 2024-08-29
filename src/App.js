import React from "react";
import { Title } from "./Title";
import { Theme } from "./Theme";

import Form from "./Forms";

const movies = [
  {
    name: "Avengers",
    available: 3,
  },
  {
    name: "Terminator",
    available: 5,
  },
];

export default function App() {
  const [theme, setTheme] = React.useState("avengers");
  return (
    <Theme theme={theme}>
      <Title>Peliculas</Title>
      {movies.map((movie) => (
        <Form movie={movie} updateTheme={() => setTheme(movie.name)} />
      ))}
    </Theme>
  );
}
