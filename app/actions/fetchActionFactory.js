export default function fetchActionFactory(action, url, handlePayload){
  return function(dispatch){
    dispatch({ type: `${action}_BEGIN`})
    const req = new Request(url)
    fetch(req)
    .then(res => res.json().then(data => {
      dispatch({
        type: `${action}_SUCCESS`,
        ...(handlePayload ? handlePayload(data) : {payload: data}),
      })
    }))
    .catch(error => {
      dispatch({
        type: `${action}_ERROR`,
        error,
      })
    })
  }
}
