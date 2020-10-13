import { ProfilePersonalDetailsEvents } from "../events/ProfilePersonalDetailsEvents"

const makeAction = <T extends ProfilePersonalDetailsEvents, P>(type: T) => (payload: P) => {
  return { type, payload }
}

export const SetPersonalDetails = makeAction<ProfilePersonalDetailsEvents.SET_PERSONAL_DETAILS, {
  name: string;
  email: string,
  phone: string,
  location: string,
  linkedIn: string,
  github: string,
  website: string,
}>(ProfilePersonalDetailsEvents.SET_PERSONAL_DETAILS);



interface IStringMap<T> { [key: string]: T }
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
  SetPersonalDetails,
}

export type IAction = IActionUnion<typeof actions>;