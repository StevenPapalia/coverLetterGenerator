import { ProfilePersonalDetailsEvents } from "../events/ProfilePersonalDetailsEvents"

const makeAction = <T extends ProfilePersonalDetailsEvents, P>(type: T) => (payload: P) => {
  return { type, payload }
}

export const SetName = makeAction<ProfilePersonalDetailsEvents.SET_NAME, string>(ProfilePersonalDetailsEvents.SET_NAME);

export const SetAge = makeAction<ProfilePersonalDetailsEvents.SET_AGE, number>(ProfilePersonalDetailsEvents.SET_AGE);

interface IStringMap<T> { [key: string]: T }
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;
const actions = {
  SetName,
  SetAge,
}

export type IAction = IActionUnion<typeof actions>;