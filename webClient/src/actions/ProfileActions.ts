import { ProfileEvents } from "../events/ProfileEvents"

const makeAction = <T extends ProfileEvents, P>(type: T) => (payload: P) => {
  return { type, payload }
}

export const SetName = makeAction<ProfileEvents.SET_NAME, string>(ProfileEvents.SET_NAME);

export const SetAge = makeAction<ProfileEvents.SET_AGE, number>(ProfileEvents.SET_AGE);

interface IStringMap<T> { [key: string]: T }
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;
const actions = {
  SetName,
  SetAge,
}

export type IAction = IActionUnion<typeof actions>;