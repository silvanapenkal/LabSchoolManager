import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 8px;
  font-size: 2rem;

  @media (max-width: 500px) {
    width: 300px;
  }

  @media (max-width: 400px) {
    width: 100px;
  }
`;
