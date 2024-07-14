import { MouseEvent, ReactNode } from "react";

export enum ButtonType {
  PRIMARY = "btn-primary",
  SECONDARY = "btn-secondary",
  SUCCESS = "btn-success",
  DANGER = "btn-danger",
  WARNING = "btn-warning",
  INFO = "btn-info",
  LIGHT = "btn-light",
  DARK = "btn-dark",
  LINK = "btn-link",
}

interface Props {
  buttonType?: ButtonType;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export const Button = ({
  buttonType = ButtonType.PRIMARY,
  onClick,
  children,
}: Props) => {
  return (
    <button
      type="button"
      className={["btn", buttonType.toString()].join(" ")}
      onClick={(event) => {
        onClick(event);
      }}
    >
      {children}
    </button>
  );
};
