import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./services/http-service";
import { PlatformSelector } from "./components/PlatformSelector";
import { GameQuery } from "./hooks/useGames";
import { SortingSelector } from "./components/SortingSelector";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genres: [],
    platform: null,
    ordering: "RELEVANCE",
    searchString: null,
  } as GameQuery);

  const toggleGenre = (genre: Genre) => {
    if (gameQuery.genres.includes(genre)) {
      setGameQuery({
        ...gameQuery,
        genres: gameQuery.genres.filter((g) => g != genre),
      });
    } else {
      setGameQuery({ ...gameQuery, genres: [...gameQuery.genres, genre] });
    }
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: `200px 2fr`,
      }}
    >
      <GridItem area="nav">
      <NavBar onSearch={(searchString) => setGameQuery( {...gameQuery, searchString: searchString})} />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList selectedGenres={gameQuery.genres} onSelect={toggleGenre} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelect={(p) => setGameQuery({ ...gameQuery, platform: p })}
          />
          <SortingSelector
            selectedOrdering={gameQuery.ordering}
            onSelect={(o) => setGameQuery({ ...gameQuery, ordering: o })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
