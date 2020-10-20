import { DND_ListEvents } from "../events/DND_ListEvents";
import { IAction, DND_Item } from "../actions/DND_ListActions";

export interface IState {
  technicalSkills: DND_Item[];
  technicalSkillsId: number;
}

const initState: IState = {
  technicalSkills: [
    {
      id: "0",
      content: "JavaScript",
    },
  ],
  technicalSkillsId: 0,
};

export const reducer = (state: IState = initState, action: IAction): IState => {
  switch (action.type) {
    case DND_ListEvents.ADD_TECHNICAL_SKILL:
      return {
        ...state,
        technicalSkills: [...state.technicalSkills, action.payload],
        technicalSkillsId: state.technicalSkillsId + 1,
      };
    case DND_ListEvents.SET_TECHNICAL_SKILLS:
      return {
        ...state,
        technicalSkills: action.payload,
      };
    default:
      return state;
  }
};
