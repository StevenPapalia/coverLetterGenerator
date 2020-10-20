import React, { useCallback, ChangeEvent, FC, MouseEvent } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { DND_Item } from '../../../../actions/DND_ListActions';
import {
  Headliner,
  Subheadliner,
  DroppableSection,
  DraggableItem,
  DraggableContent,
  DeleteSkill,
  AddItemForm,
  AddItemInputField,
  AddItemSubmit,
} from './styles';

const reorder = (list: DND_Item[], startIndex: number, endIndex: number) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

interface Props {
  headline: string;
  subheadline: string;
  technicalSkills: DND_Item[];
  technicalSkillsId: number;
  addTechnicalSkill: (technicalSkill: DND_Item) => void;
  setTechnicalSkills: (technicalSkillsList: DND_Item[]) => void;
}

export const DND_List: FC<Props> = ({
  headline,
  subheadline,
  technicalSkills,
  addTechnicalSkill,
  setTechnicalSkills,
  technicalSkillsId,
}) => {
  const [newSkill, setNewSkill] = React.useState('');

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    else setTechnicalSkills(reorder([...technicalSkills], source.index, destination.index));
  };

  const handleSubmit = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      addTechnicalSkill({
        id: `${technicalSkillsId + 1}`,
        content: newSkill,
      });
    },
    [technicalSkills, technicalSkillsId, newSkill],
  );

  const removeItem = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const ItemIndex = parseInt(event.currentTarget.name);
      const newTechnicalSkills = [...technicalSkills];
      newTechnicalSkills.splice(ItemIndex, 1);
      setTechnicalSkills(newTechnicalSkills);
    },
    [technicalSkills, setTechnicalSkills],
  );

  const handleNewSkillChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setNewSkill(event.target.value);
    },
    [newSkill],
  );

  return (
    <>
      <Headliner>{headline}</Headliner>
      <Subheadliner>{subheadline}</Subheadliner>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {({ innerRef, droppableProps, placeholder }, { isDraggingOver }) => (
            <DroppableSection isDraggingOver={isDraggingOver} {...droppableProps} ref={innerRef}>
              {technicalSkills.map(({ id, content }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => (
                    <DraggableItem
                      isDragging={isDragging}
                      ref={innerRef}
                      {...draggableProps}
                      {...dragHandleProps}>
                      <DraggableContent>{content}</DraggableContent>
                      <DeleteSkill name={`${index}`} type='button' onClick={removeItem} />
                    </DraggableItem>
                  )}
                </Draggable>
              ))}
              {placeholder}
            </DroppableSection>
          )}
        </Droppable>
      </DragDropContext>
      <AddItemForm onSubmit={handleSubmit}>
        <AddItemInputField
          value={newSkill}
          onChange={handleNewSkillChange}
          required
          maxLength={20}
          placeholder='Add A Skill'
        />
        <AddItemSubmit disabled={technicalSkills.length > 9} type='submit' value='Add Skill' />
      </AddItemForm>
    </>
  );
};
