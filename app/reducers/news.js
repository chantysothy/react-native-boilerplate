const initialState = {
  news: [],
  isFailed: true,
  isSuccess: false,
  isFetching: false
}
export function news(state=initialState, { type, payload }){
  switch (type) {
    case 'NEWS_FETCH_BEGIN':
    return {
      ...state,
      isFailed: false,
      isSuccess: false,
      isFetching: true,
    }
    break;
    case 'NEWS_FETCH_SUCCESS':
    return {
      ...state,
      news: payload,
      isFailed: false,
      isSuccess: true,
      isFetching: false,
    }
    case 'NEWS_FETCH_ERROR':
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
