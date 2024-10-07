import styled from "styled-components";

import localFont from "@next/font/local";

const objectsans = localFont({
  src: "../fonts/PPObjectSans-Regular.otf",
  fallback: ["sans-serif"],
});

export const List = styled.div`
  font-family: ${objectsans.style.fontFamily}, sans-serif;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  margin: 0 auto;
  max-width: 22.5rem;
  padding: 0;
  background-color: #e3e3e3;
  width: 30rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1rem;
    background-color: #fff;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
    &:hover {
      background-color: #f4f4f4;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 1rem;
    border: 0.3125rem solid #fff;
    &:hover {
      background-color: #a0a0a5;
      border: 0.25rem solid #f4f4f4;
    }
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;
