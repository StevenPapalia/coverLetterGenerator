import styled from "styled-components";
import { defaultProfilePicture, deleteIcon } from "../../../../paths";

export const ImageContainer = styled("form")`
  width: 222px;
  border-radius: 25px;
  background-color: blanchedalmond;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  position: relative;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 10px chocolate;
  &:focus {
    outline: none;
  }
`;

interface UploadImageProps {
  imgUrl: string;
  message: string;
}

export const UploadImage = styled("input")<UploadImageProps>`
  margin: 10px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #f0f0f0;
  background-image: url(${({ imgUrl }) =>
    imgUrl ? imgUrl : defaultProfilePicture});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: transparent;
  ::before {
    content: "${({ imgUrl, message }) => (imgUrl ? "" : message)}";
    width: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 2.5px;
    text-align: center;
    color: #878787;
    cursor: pointer;
  }
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  &:hover {
    outline: none;
    box-shadow: 0px 0px 10px green;
  }
  &:focus {
    outline: none;
  }
`;

export const RemoveImage = styled("input")`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0px;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${deleteIcon});
  cursor: pointer;
  &:hover {
    outline: none;
    box-shadow: 0px 0px 10px red;
  }
  &:focus {
    outline: none;
  }
`;
