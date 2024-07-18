import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GenreListItemSkeleton = () => {
  return (
    <ListItem paddingY={"5px"}>
      <HStack>
        <Skeleton
          boxSize="32px"
          borderRadius={8}
        />
        <SkeletonText width={"100px"}/>
      </HStack>
    </ListItem>
  );
};
