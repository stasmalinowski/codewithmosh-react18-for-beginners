import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../utils/image-utils";

export const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      {error && <p>{error}</p>}
      <List>
        {genres.map((g) => (
          <ListItem key={g.id} paddingY={"5px"}>
            <HStack>
              <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(g.image_background, 600, 400)} />
              <Text>{g.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
