import styled from "styled-components";
import { deleteIcon } from "../../../../paths";

export const Headliner = styled("h3")`
  text-align: center;
`;

export const Subheadliner = styled("h6")`
  text-align: center;
`;

interface DroppableSectionProps {
  isDraggingOver: boolean;
}

export const DroppableSection = styled("div")<DroppableSectionProps>`
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? "lightblue" : "lightgrey"};
  padding: 5px;
  width: 250px;
  margin: auto;
  border: 0.5px solid #007bff;
  border-radius: 5%;
`;

interface DraggableItemProps {
  isDragging: boolean;
}

export const DraggableItem = styled("div")<DraggableItemProps>`
  user-select: none;
  padding: 10px;
  margin: 8px 5px 8px 5px;
  border: 1px solid black;
  border-radius: 5%/50%;
  background: ${({ isDragging }) =>
    isDragging ? "#6c957d" : "blanchedalmond"};
  box-shadow: ${({ isDragging }) =>
    isDragging ? "0px 0px 10px green" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    outline: none;
    box-shadow: 0px 0px 10px green;
  }
  &:focus {
    outline: none;
  }
`;

export const DraggableContent = styled("div")`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DeleteSkill = styled("button")`
  width: 12px;
  height: 12px;
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
    background-color: #cc3300;
  }
  &:focus {
    outline: none;
  }
`;

export const AddItemForm = styled("form")`
  display: block;
  margin: 10px auto auto auto;
  width: 250px;
  border: 1px solid #007bff;
  border-radius: 10%/20%;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const AddItemInputField = styled("input")`
  padding: 10px;
  margin: 10px auto auto auto;
  border: 1px solid black;
  border-radius: 5%/50%;
  &:hover {
    outline: none;
    box-shadow: 0px 0px 10px green;
  }
  &:focus {
    outline: none;
  }
`;

export const AddItemSubmit = styled("input")`
  padding: 10px;
  margin: 10px auto 10px auto;
  border: 1px solid black;
  border-radius: 5%/50%;
  &:hover {
    outline: none;
    box-shadow: 0px 0px 10px green;
  }
  &:focus {
    outline: none;
  }
`;
