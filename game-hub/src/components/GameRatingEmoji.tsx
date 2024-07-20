import mehEmoji from "../assets/meh.webp";
import thumbsUpEmoji from "../assets/thumbs-up.webp";
import bullsEyeEmoji from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const emojiMap: { [index: number]: ImageProps } = {
  3: { src: mehEmoji, alt: "meh" },
  4: { src: thumbsUpEmoji, alt: "recommended" },
  5: { src: bullsEyeEmoji, alt: "outstanding" },
};

export const GameRatingEmoji = ({ rating }: Props) => {
  rating = rating < 4 ? 3 : rating;
  rating = rating > 5 ? 5 : rating;
  return <Image {...emojiMap[rating]} boxSize={8} />
};
