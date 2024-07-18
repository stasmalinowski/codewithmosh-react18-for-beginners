import { HStack, Image, ListItem, Text } from "@chakra-ui/react";
import { Genre } from "../services/genre-service";
import { getCroppedImageUrl } from "../utils/image-utils";

interface Props{
  genre: Genre
}

export const GenreListItem = ({ genre }: Props) => {
  return (
    <ListItem paddingY={"5px"}>
      <HStack>
        <Image
          boxSize="32px"
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background, 600, 400)}
        />
        <Text>{genre.name}</Text>
      </HStack>
    </ListItem>
  );
};
