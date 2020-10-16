import styled from 'styled-components';

export const Headliner = styled("h3")`
  text-align: center;
`;

interface DroppableSectionProps {
  isDraggingOver: boolean;
}

export const DroppableSection = styled("div")<DroppableSectionProps>`
  background: ${({ isDraggingOver }) => isDraggingOver ? "lightblue" : "lightgrey"};
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
  background: ${({ isDragging }) => isDragging ? "#6c957d" : "#6c757d"};
  box-shadow: ${({ isDragging }) => isDragging ? "0px 0px 10px green" : "none"};
  display: flex;
  justify-content: space-around;
  &:hover {
    outline: none;
    box-shadow: 0px 0px 10px green;
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