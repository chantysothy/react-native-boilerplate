import fetchActionFactory from './fetchActionFactory'

export function fetchTopNews(page){
  return fetchActionFactory(
    'TOP_NEWS_FETCH',
    `http://hn.algolia.com/api/v1/search?tags=front_page&page=${page}`,
    data => ({
      payload: data.hits,
      page: data.page,
      pageCount: data.nbPages,
    })
  )
}

export function fetchLatestNews(page){
  return fetchActionFactory(
    'LATEST_NEWS_FETCH',
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
    data => ({
      payload: data.hits,
      page: data.page,
      pageCount: data.nbPages,
    })
  )
}

export function fetchStory(id){
  return fetchActionFactory('STORY_FETCH', `http://hn.algolia.com/api/v1/items/${id}`)
}
