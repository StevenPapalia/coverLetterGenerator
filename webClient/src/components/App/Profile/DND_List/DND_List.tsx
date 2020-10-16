import React, { useCallback, FC } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { 
  Headliner,
  Subheadliner,
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

// a little function to help us with reordering the result
const reorder = (list: DND_Item[], startIndex: number, endIndex: number) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

interface Props {
  headline: string;
  technicalSkills: DND_Item[];
  addTechnicalSkill: (technicalSkill: DND_Item) => void;
  setTechnicalSkills: (technicalSkillsList: DND_Item[]) => void;
  technicalSkillsId: number;
}

export const DND_List: FC<Props> = ({ headline, technicalSkills, addTechnicalSkill, setTechnicalSkills, technicalSkillsId }) => {

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    else setTechnicalSkills(
      reorder(
        [...technicalSkills],
        source.index,
        destination.index
      )
    );
  }

  const handleSubmit = useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTechnicalSkill({
      id: `${technicalSkillsId + 1}`,
      content: `${Math.random()}`,
    });
  }, [technicalSkills, technicalSkillsId])

  const removeItem = (index: number) => {
    const newTechnicalSkills = [...technicalSkills];
    newTechnicalSkills.splice(index, 1)
    setTechnicalSkills(newTechnicalSkills);
  }

  return (
    <>
      <Headliner>{headline}</Headliner>
      <Subheadliner>
        Add Up To 10 Skills. Reorder By Dragging And Dropping.
      </Subheadliner>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <DroppableSection
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {technicalSkills.map((item, index) => (
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
        <AddItemSubmit disabled={technicalSkills.length > 9} type="submit" value="Add Skill" />
      </AddItemForm>
    </>
  );
}
