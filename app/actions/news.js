import fetchActionFactory from './fetchActionFactory'

export function fetchTopNews(){
  return fetchActionFactory(
    'TOP_NEWS_FETCH',
    'http://hn.algolia.com/api/v1/search?tags=front_page',
    data => data.hits
  )
}

export function fetchLatestNews(){
  return fetchActionFactory(
    'LATEST_NEWS_FETCH',
    'https://hn.algolia.com/api/v1/search_by_date?tags=story',
    data => data.hits
  )
}

export function fetchStory(id){
  return fetchActionFactory('STORY_FETCH', `http://hn.algolia.com/api/v1/items/${id}`)
}
