import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;

  @media (max-width: 500px) {
    width: 300px;
  }

  @media (max-width: 400px) {
    width: 100px;
  }
`;

export const StyledImg = styled.img`
  width: 52px;
  @media (max-width: 400px) {
    width: 28px;
  }
`