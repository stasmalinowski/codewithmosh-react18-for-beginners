import { useGenres } from "../hooks/useGenres"

export const GenreList = () => {
  const { genres, error, isLoading } = useGenres()

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {genres.map(g => <li key={g.id}>{g.name}</li>)}
      </ul>
    </>
  )
}
