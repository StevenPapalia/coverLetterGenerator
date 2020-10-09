import { ProfilePictureEvents } from "../events/ProfilePictureEvents"

const makeAction = <T extends ProfilePictureEvents, P>(type: T) => (payload: P) => {
  return { type, payload }
}

export const UploadImage = makeAction<ProfilePictureEvents.UPLOAD_PROFILE_PICTURE, string>(ProfilePictureEvents.UPLOAD_PROFILE_PICTURE);

interface IStringMap<T> { [key: string]: T }
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;
const actions = {
  UploadImage,
}

export type IAction = IActionUnion<typeof actions>;