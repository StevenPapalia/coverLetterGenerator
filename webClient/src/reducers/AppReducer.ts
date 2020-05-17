export interface IState {
  currentPage: number;
}

const initState: IState = {
  currentPage: 0,
}

export const reducer = (state: IState = initState): IState => state;