import React from 'react'

const Comments = ({ comments }) => {
    return (
        <div>
            <p>Comments</p>
            {comments.map(comment => <p>{comment.name} </p>)}
        </div>
    )
}

export default Comments