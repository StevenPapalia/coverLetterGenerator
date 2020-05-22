import { TopTabBarEvents } from "../events/TopTabBarEvents"

const makeAction = <T extends TopTabBarEvents, P>(type: T) => (payload: P) => {
  return { type, payload }
}

export const SetPage = makeAction<TopTabBarEvents.SET_PAGE, number>(TopTabBarEvents.SET_PAGE);

interface IStringMap<T> { [key: string]: T }
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;
const actions = {
  SetPage,
}

export type IAction = IActionUnion<typeof actions>;