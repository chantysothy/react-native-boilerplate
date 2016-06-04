import fetchActionFactory from './fetchActionFactory'

export function fetchNews(){
  return fetchActionFactory(
    'NEWS_FETCH',
    'http://hn.algolia.com/api/v1/search?tags=front_page',
    data => data.hits
  )
}

export function fetchStory(id){
  return fetchActionFactory('STORY_FETCH', `http://hn.algolia.com/api/v1/items/${id}`)
}
