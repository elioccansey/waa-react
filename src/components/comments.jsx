import React from 'react'

const Comments = ({ comments }) => {
    return (
        <div>
            <p>Comments</p>
            {comments.map(comment => <p key={comment.id}>{comment.name} </p>)}
        </div>
    )
}

export default React.memo(Comments)