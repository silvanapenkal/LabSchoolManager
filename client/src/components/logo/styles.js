import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 450px;
  font-size: 2rem;

  @media (max-width: 500px) {
    width: 300px;
  }

  @media (max-width: 400px) {
    width: 100px;
  }
`;
