import React from 'react'
import Place from '../Place/Place'
import Cards from '../Cards/Cards'

const PostAndDetails = ({width}) => {
  return (
    <div className=' d-flex flex-row justify-content-evenly gap-4 p-4'>
      <div className="left-side col-md-7 col-sm-12 overflow-y-scroll " style={{height:"700px"}}><Cards /></div>
      {width >= 990 ? <div className="right-side  col-3"><Place /></div> : ""}
    </div>
  )
}

export default PostAndDetails
