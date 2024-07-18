import { Grid, GridItem, Show } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"
import { GameGrid } from "./components/GameGrid"
import { GenreList } from "./components/GenreList"
import { useState } from "react"
import { Genre, Platform } from "./services/http-service"
import { PlatformSelector } from "./components/PlatformSelector"

function App() {
  const [ selectedGenres, setSelectedGenres ] = useState<Genre[]>([])
  const [ selectedPlatform, setSelectedPlatform ] = useState<Platform | null>(null)

  const toggleGenre = (genre: Genre) => {
    if (selectedGenres.includes(genre)){
      setSelectedGenres(selectedGenres.filter(g => g != genre))
    }
    else {
      setSelectedGenres([...selectedGenres, genre])
    }
  }

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: `1fr`,
      lg: `200px 2fr`
    }}>
      <GridItem area="nav">
        <NavBar />      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside" outline={"dashed red"}>
          <GenreList selectedGenres={selectedGenres} onSelect={toggleGenre}/>
        </GridItem>
      </Show>
      <GridItem area="main" outline={"dashed red"}>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelect={setSelectedPlatform} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenres={selectedGenres} />
      </GridItem>
    </Grid>
  )
}

export default App
