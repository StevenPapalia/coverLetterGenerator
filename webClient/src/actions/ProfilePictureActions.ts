import { ProfilePictureEvents } from '../events/ProfilePictureEvents'

const makeAction = <T extends ProfilePictureEvents, P>(type: T) => (payload: P) => {
  return {
    type,
    payload,
  }
}

export const EditImage = makeAction<ProfilePictureEvents.EDIT_PROFILE_PICTURE, string>(
  ProfilePictureEvents.EDIT_PROFILE_PICTURE,
)

interface IStringMap<T> {
  [key: string]: T
}
type IAnyFunction = (...args: any[]) => any
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>
const actions = {
  EditImage,
}

export type IAction = IActionUnion<typeof actions>
