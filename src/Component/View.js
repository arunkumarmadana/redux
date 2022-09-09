import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Store/data';

function View  ()  {

const data = useSelector((state)=>state.allData.data)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getData());
    }, [dispatch])

  return (
    <div>
      <table>
  <tr>
    <th>UserId</th>
    <th>Id</th>
    <th>Title</th>
    <th>Body</th>
  </tr>
  {data.map((items)=>{
        return(
  <tr>
    <td>{items.userId}</td>
    <td>{items.id}</td>
    <td>{items.title}</td>
    <td>{items.body}</td>
    </tr>
        )
    })}
</table>
    </div>
  )
}
export default View

