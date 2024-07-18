import { Grid, GridItem, Show } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"
import { GameGrid } from "./components/GameGrid"
import { GenreList } from "./components/GenreList"

function App() {
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside" outline={"dashed red"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" outline={"dashed red"}>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
