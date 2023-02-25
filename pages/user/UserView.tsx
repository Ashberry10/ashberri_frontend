import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'
import { useAppDispatch,useAppSelector } from '../app/hooks'



export const UserView = () => {
  // fetching user is possible with the help of useeffct,useselecter,usedispatch but in ts   
  //   we will use use useAppDispatch,useAppSelector,useeffect intead of useselecter and usedispatch
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h2>List of Users</h2>
 
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map(user => (
            <li key={user.id}>{user.name}{user.email}{user.date_of_birth}</li>
            // <li key={user.id}>{user.email}</li>

          ))}
        </ul>
      ) : null}
    </div>
  )
}