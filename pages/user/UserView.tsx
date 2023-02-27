import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchUsers } from './userSlice'
// import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { useGetAllUserQuery } from './userSlice'


export const UserView = () => {
  // fetching user is possible with the help of useeffct,useselecter,usedispatch but in ts   
  //   we will use use useAppDispatch,useAppSelector,useeffect intead of useselecter and usedispatch
  // const user = useAppSelector(state => state.user)
  // const responseInfo  = useGetAllUserQuery()
  const data  = useGetAllUserQuery()

  console.log(data);
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])
  return (
    <>
    <div><h1>hellow o</h1></div>
    </>)}
