import { ReactElement, useState } from "react";
import './ListGroup.css'

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (index: number, value: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  let listItems: ReactElement;

  if (items.length === 0) {
    listItems = <p>No items found 😔</p>;
  } else {
    listItems = (
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(index, item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1>{heading}</h1>
      {listItems}
    </>
  );
}

export default ListGroup;
