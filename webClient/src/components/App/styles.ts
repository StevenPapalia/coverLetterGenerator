import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";

export const AppWrapper = styled("div")`
  width: 100%;
  margin-right: auto;
  margin-left: auto;  
  @media (min-width: 700px) {
    width: 700px;
  }
  @media (min-width: 900px) {
    width: 900px;
  }
`;

export const MainContentSection = styled("div")`
  min-height: 1000px;
  background-color: aliceblue;
  border-left: 0.5px solid #007bff;
  border-right: 0.5px solid #007bff;
  border-bottom: 0.5px solid #007bff;
  @media (min-width: 700px) {
    width: 700px;
  }
  @media (min-width: 900px) {
    width: 900px;
  }
`;

interface JumboProps {
  message: string;
};

export const Jumbo = styled(Jumbotron)<JumboProps>`
  background-color: blanchedalmond;
  border-radius: 0px;
  ::before {
    content: "${({ message }) => message ?? ""}";
    width: 150px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 2.5px;
    text-align: center;
  }
`;