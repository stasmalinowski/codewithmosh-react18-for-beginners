import { Button, HStack, Image, ListItem, Text } from "@chakra-ui/react";
import { Genre } from "../services/genre-service";
import { getCroppedImageUrl } from "../utils/image-utils";

interface Props{
  genre: Genre
  isHighlighted: boolean
  onClick: (genre: Genre) => void
}

export const GenreListItem = ({ genre, isHighlighted, onClick }: Props) => {
  return (
    <ListItem borderRadius={5} padding={"5px"} background={isHighlighted ? `#ffffff40` : undefined}>
      <HStack>
        <Image
          boxSize="32px"
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background, 600, 400)}
        />
        <Button onClick={() => onClick(genre)} variant={"link"} whiteSpace="normal" textAlign="start">{genre.name}</Button>
      </HStack>
    </ListItem>
  );
};
