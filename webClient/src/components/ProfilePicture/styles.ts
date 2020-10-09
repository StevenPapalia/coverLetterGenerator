import styled from "styled-components";
import { defaultProfilePicture, removeImage } from "../.././keys"

export const ImageContianer = styled("div")`
  border-radius: 25px;
  background-color: lightyellow;
  margin: 0px;
  padding: 0px;
  float: left;
  position: relative;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 10px chocolate;
  &:focus {
    outline: none;
  }
`;

interface ImageProps {
  imgUrl: string;
  message: string;
};

export const UploadImage = styled("input")<ImageProps>`
  margin: 10px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #f0f0f0;
  background-image: url(${({ imgUrl }) => imgUrl ? imgUrl : defaultProfilePicture });
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: transparent;
  ::before {
    content: "${({ imgUrl, message }) => imgUrl ? "" : message }";
    width: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px green;
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
  background-image: url(${ removeImage });
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px green;
  }
`;