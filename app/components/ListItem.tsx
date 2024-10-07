import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
  background-color: white;
  border-bottom: 0.0625rem solid #c4c4c4;
  &:last-child {
    border-bottom: none;
  }
`;

export const ListItemText = styled.span`
  font-size: 16px;
  flex-grow: 1;
  color: #1e1f1d;
`;
