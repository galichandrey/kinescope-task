import React from "react";
import styled from "styled-components";
import { DeleteIcon } from "./DeleteIcon";
import { ClearIcon } from "./ClearIcon";

const StyledButton = styled.button<{ type: "add" | "delete" | "clear" }>`
  background-color: ${(props) =>
    props.type === "add" ? "#6161fc" : "transparent"};
  color: ${(props) => (props.type === "add" ? "white" : "inherit")};
  border: none;
  cursor: pointer;
  padding: ${(props) => (props.type === "add" ? "0.375rem 0.75rem" : "0")};
  margin-left: 0.5rem;
  font-size: ${(props) => (props.type === "add" ? "0.875rem" : "inherit")};
  border-radius: ${(props) => (props.type === "add" ? "0.25rem" : "0")};

  svg {
    fill: ${(props) =>
      props.type === "delete" || "clear" ? "#ff691e" : "inherit"};
    width: ${(props) =>
      props.type === "delete" || "clear" ? "1.5rem" : "inherit"};
    height: ${(props) =>
      props.type === "delete" || "clear" ? "1.5rem" : "inherit"};
    display: ${(props) =>
      props.type === "delete" || "clear" ? "block" : "none"};
  }

  &:hover {
    background-color: ${(props) =>
      props.type === "add" ? "#3700b3" : "inherit"};
    svg {
      fill: ${(props) =>
        props.type === "delete" || "clear" ? "#e65100" : "inherit"};
    }
  }
`;

interface ButtonProps {
  type: "add" | "delete" | "clear";
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {type === "delete" && <DeleteIcon />}
      {type === "clear" && <ClearIcon />}
      {children}
    </StyledButton>
  );
};

export default Button;
