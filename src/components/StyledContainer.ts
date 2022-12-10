import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
`;

export const StyledHeroBox = styled.div`
  padding: 6.8125rem 4.8125rem;
  background-image: url("/hero-bg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 834px) {
    display: grid;
    place-content: center;
    padding: 6.8125rem 2rem;
  }
`;

export const StyledHeroHeading = styled.h1`
  font-weight: 700;
  font-size: 4.5rem;
  color: white;
  line-height: 5.85rem;
  width: 40%;
  @media screen and (max-width: 834px) {
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.75rem;
    line-height: 2.2787rem;
    width: 100%;
    max-width: 100%;
    text-align: center;
  }
`;

export const StyledBox = styled.div`
  padding: 3.9375rem 4.8125rem;
  @media screen and (max-width: 480px) {
    padding: 3.5rem 1.75rem;
  }
`;

export const StyledInputHeading = styled.span<{
  mb?: string;
  color?: string;
  bg?: boolean;
}>`
  display: block;
  font-size: 1.5rem;
  line-height: 1.95rem;
  color: ${({ color }) => color || "black"};
  margin-bottom: ${({ mb }) => mb};
  ${({ bg }) =>
    bg &&
    css`
      background-color: black;
      padding: 0.5rem;
    `}
`;

export const StyledInput = styled.input`
  width: 100%;
  border: solid 1px #000000;
  font-size: 1.3rem;
  padding: 0.5rem;
  margin-bottom: 3rem;
  outline: none;
`;

export const StyledMovieContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  column-gap: 0.8125rem;
`;

export const StyledMovieCard = styled.div<{ bg?: string }>`
  display: grid;
  height: 18.75rem;
  min-width: 18.75rem;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  place-content: center;
  border-radius: 0.75rem;
  @media screen and (max-width: 480px) {
    height: 12.5rem;
    min-width: 12.5rem;
  }
`;
