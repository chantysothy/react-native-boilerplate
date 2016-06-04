const initialState = {
  story: {},
  isFailed: true,
  isSuccess: false,
  isFetching: false
}
export function story(state=initialState, { type, payload }){
  switch (type) {
    case 'STORY_FETCH_BEGIN':
    return {
      ...state,
      isFailed: false,
      isSuccess: false,
      isFetching: true,
    }
    case 'STORY_FETCH_SUCCESS':
    return {
      ...state,
      story: payload,
      isFailed: false,
      isSuccess: true,
      isFetching: false,
    }
    case 'STORY_FETCH_ERROR':
    return {
      ...state,
      isFailed: true,
      isSuccess: false,
      isFetching: false,
    }
    default:
    return state
  }
}
