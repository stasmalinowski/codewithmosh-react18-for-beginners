import { Badge, Box, Text } from "@chakra-ui/react";

interface Props{
  score: number;
}

export const CriticScore = ({score}: Props) => {
  let color: string;

  color = "green"
  if (score < 70){
    color = "yellow"
  }
  if (score < 30){
    color = "red"
  }

  return (
    <Badge color={`${color}.400`} bgColor={`${color}.800`} fontSize={"sm"} paddingX={2} borderRadius={5}>
      {score}
    </Badge>
  )
}
