import React,{memo} from 'react'

const ChildA = ({callback}) => {

    console.log("Call Back Hook")
  return (
    <div>ChildA</div>
  )
}

export default memo(ChildA)