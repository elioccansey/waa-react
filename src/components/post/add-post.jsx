import React, { useRef } from 'react'
import { addPost } from '../../services/postService'

const AddPost = () => {

    const formRef = useRef()

    const handleAddPost = async (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const title = formData.get('title');
        const author = formData.get("author")
        const content = formData.get("content")
        try {
            await addPost({ title, author, content })
        } catch (error) {
            console.error(error.message)
        }
        console.log(title, author, content)
    }

    return (
        <form ref={formRef} onSubmit={handleAddPost}>
            <h2>Add a post</h2>
            <p>
                <label htmlFor="title">Title : <input type="text" id='title' name='title' /> </label>
            </p>
            <p>
                <label htmlFor="author">Author : <input type="text" id='author' name='author' /> </label>
            </p>
            <p>
                <label htmlFor="title">Content : </label>
                <textarea name="content" id="content"></textarea>
            </p>
            <button type="submit" >Add post</button>
        </form>
    )
}

export default AddPost