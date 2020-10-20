import { DND_ListEvents } from "../events/DND_ListEvents"

export interface DND_Item {
  id: string;
  content: string;
}

const makeAction = <T extends DND_ListEvents, P>(type: T) => (payload: P) => {
  return { type, payload }
}

export const AddTechnicalSkill = makeAction<
  DND_ListEvents.ADD_TECHNICAL_SKILL,
  DND_Item
>(DND_ListEvents.ADD_TECHNICAL_SKILL);

export const SetTechnicalSkills = makeAction<
  DND_ListEvents.SET_TECHNICAL_SKILLS,
  DND_Item[]
>(DND_ListEvents.SET_TECHNICAL_SKILLS);

interface IStringMap<T> { [key: string]: T }
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;
const actions = {
  AddTechnicalSkill,
  SetTechnicalSkills,
}

export type IAction = IActionUnion<typeof actions>;