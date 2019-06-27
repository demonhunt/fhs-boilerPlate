type ParseObject = Object
export type Action = { type: 'LOADED_ABOUT', list: Array<ParseObject> }

export type GetState = () => Object
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
export type PromiseAction = Promise<Action>
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any
