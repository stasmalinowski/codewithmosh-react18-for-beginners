import { Grid, GridItem, Show } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"
import { GameGrid } from "./components/GameGrid"
import { GenreList } from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./services/http-service"

function App() {
  const [ selectedGenre, setSelectedGenre ] = useState<Genre | null>(null)

  const toggleGenre = (genre: Genre) => {
    if (selectedGenre == genre){
      setSelectedGenre(null)
    }
    else {
      setSelectedGenre(genre)
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
          <GenreList selectedGenre={selectedGenre} onSelect={toggleGenre}/>
        </GridItem>
      </Show>
      <GridItem area="main" outline={"dashed red"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
