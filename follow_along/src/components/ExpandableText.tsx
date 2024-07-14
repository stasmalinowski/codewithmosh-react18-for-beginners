import { useState } from "react";

interface Props {
  numberOfChars?: number;
  children: string;
}

export const ExpandableText = ({ numberOfChars = 100, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fitsInPreview: boolean = numberOfChars >= children.length;

  const previewText: string =
    children.substring(0, numberOfChars) + (!fitsInPreview ? "..." : "");

  const text = (
    <p style={{ display: "inline" }}>{isExpanded ? children : previewText}</p>
  );
  const toggleButton = (
    <button
      className="expansion-toggle"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? "Show Less" : "Show More"}
    </button>
  );

  return (
    <div>
      {text}
      {!fitsInPreview && toggleButton}
    </div>
  );
};
