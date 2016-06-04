const initialState = {
  news: [],
  page: 0,
  pageCount: 0,
  isFailed: true,
  isSuccess: false,
  isFetching: false
}
export function latestNews(state=initialState, { type, payload, page, pageCount }){
  switch (type) {
    case 'LATEST_NEWS_FETCH_BEGIN':
    return {
      ...state,
      isFailed: false,
      isSuccess: false,
      isFetching: true,
    }
    break;
    case 'LATEST_NEWS_FETCH_SUCCESS':
    return {
      ...state,
      news: [
        ...state.news,
        ...payload
      ],
      page,
      pageCount,
      isFailed: false,
      isSuccess: true,
      isFetching: false,
    }
    case 'LATEST_NEWS_FETCH_ERROR':
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

export function topNews(state=initialState, { type, payload, page, pageCount }){
  switch (type) {
    case 'TOP_NEWS_FETCH_BEGIN':
    return {
      ...state,
      isFailed: false,
      isSuccess: false,
      isFetching: true,
    }
    break;
    case 'TOP_NEWS_FETCH_SUCCESS':
    return {
      ...state,
      news: [
        ...state.news,
        ...payload
      ],
      page,
      pageCount,
      isFailed: false,
      isSuccess: true,
      isFetching: false,
    }
    case 'TOP_NEWS_FETCH_ERROR':
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
