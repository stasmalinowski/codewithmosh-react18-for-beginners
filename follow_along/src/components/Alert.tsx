import { ReactNode } from "react";

export enum AlertType {
  PRIMARY = "alert-primary",
  SECONDARY = "alert-secondary",
  SUCCESS = "alert-success",
  DANGER = "alert-danger",
  WARNING = "alert-warning",
  INFO = "alert-info",
  LIGHT = "alert-light",
  DARK = "alert-dark",
  LINK = "alert-link",
}

interface Props {
  alertType?: AlertType;
  onClose: () => void;
  children: ReactNode;
}

export const Alert = ({ alertType = AlertType.PRIMARY, onClose, children }: Props) => {
  return (
    <div
      className={
        "alert " + alertType.toString() + " alert-dismissible"
      }
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
