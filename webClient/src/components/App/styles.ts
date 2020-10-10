import styled from "styled-components";

export const AppWrapper = styled("div")`
  width: 100%;
  margin-right: auto;
  margin-left: auto;  
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const MainContentSection = styled("div")`
  min-height: 1000px;
  background-color: aliceblue;
  border-left: 0.5px solid #007bff;
  border-right: 0.5px solid #007bff;
  border-bottom: 0.5px solid #007bff;
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;