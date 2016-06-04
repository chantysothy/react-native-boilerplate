const auth = store => next => action => {
  if(action.status == 401){
    return next({ type: 'AUTH_ERROR' })
  }else if(action.err instanceof TypeError && !action.status){
    return next({ type: "DISCONNECT" })
  }
  return next(action)
}

export default auth
