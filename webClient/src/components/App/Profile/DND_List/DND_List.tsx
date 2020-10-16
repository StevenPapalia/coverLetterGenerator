import React, { FC } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { 
  Headliner,
  DroppableSection,
  DraggableItem,
  AddItemForm,
  AddItemInputField,
  AddItemSubmit,
} from './styles';

interface DND_Item {
  id: string;
  content: string;
}

const starterState: DND_Item[] = [
  {id: "0", content: "Example Skill"},
]

// a little function to help us with reordering the result
const reorder = (list: DND_Item[], startIndex: number, endIndex: number) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

interface Props {
  headline: string;
  // items: DND_Item[];
}

export const DND_List: FC<Props> = ({ headline }) => {
  const [items, setItems] = React.useState(starterState);
  const [id, setId] = React.useState(0);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    else setItems(
      reorder(
        [...items],
        source.index,
        destination.index
      )
    );
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: `${id + 1}`,
        content: `${Math.random()}`,
      }
    ]);
    setId(id + 1);
  }

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1)
    setItems(newItems);
  }

  return (
    <>
      <Headliner>{headline}</Headliner>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <DroppableSection
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <DraggableItem
                      isDragging={snapshot.isDragging}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.content}
                      <button type="button" onClick={() => removeItem(index)}>
                        delete
                      </button>
                    </DraggableItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </DroppableSection>
          )}
        </Droppable>
      </DragDropContext>
      <AddItemForm onSubmit={handleSubmit}>
        <AddItemInputField required placeholder="Add A Skill" />
        <AddItemSubmit type="submit" value="Add Skill" />
      </AddItemForm>
    </>
  );
}
