import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import {
  StyledBox,
  StyledContainer,
  StyledHeroBox,
  StyledHeroHeading,
  StyledInput,
  StyledInputHeading,
  StyledMovieCard,
  StyledMovieContainer,
} from "./components/StyledContainer";
import { StyledNav } from "./components/StyledNav";

interface IMoviesProps {
  imdbID: string;
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
}

function App() {
  const [movies, setMovies] = useState<Array<IMoviesProps>>([]);
  const [searchKey, setSearchKey] = useState("");
  const [value] = useDebounce(searchKey, 500);

  useEffect(() => {
    axios(`https://www.omdbapi.com/?s=${searchKey}&apikey=fc327e9&type=movie`)
      .then((res) => setMovies(res.data.Search))
      .catch();
  }, [value]);

  return (
    <StyledContainer>
      <StyledNav>
        <img src="/Logo.webp" alt="logo" />
      </StyledNav>
      <StyledHeroBox>
        <StyledHeroHeading>Watch something incredible</StyledHeroHeading>
      </StyledHeroBox>
      <StyledBox>
        <StyledInputHeading>Search</StyledInputHeading>
        <StyledInput
          value={searchKey}
          onChange={(e) => setSearchKey(e.currentTarget.value)}
        />

        <StyledInputHeading mb="1.125rem">Movie</StyledInputHeading>
        <StyledMovieContainer>
          {movies !== undefined
            ? movies.map((movie) => (
                <StyledMovieCard key={movie.imdbID} bg={movie.Poster}>
                  <StyledInputHeading color="white" bg>
                    {movie.Title}
                  </StyledInputHeading>
                </StyledMovieCard>
              ))
            : null}
        </StyledMovieContainer>
      </StyledBox>
    </StyledContainer>
  );
}

export default App;
