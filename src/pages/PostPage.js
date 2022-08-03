import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updatePostStart } from '../redux/actions';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardText, MDBCardTitle, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';

const PostPage = () => {
    const { id } = useParams();
    const posts = useSelector(state => (state.data.posts))
    const post = posts.find(item => item.id === Number(id))
    const dispatch = useDispatch();
    const initialState = {
        title: post.title,
        body: post.body,
        id: Number(id)
    }

    const navigate = useNavigate()
    const [postValue, setPostValue] = useState(initialState)

    const [edit, setEdit] = useState(true)

    const handleEdit = (e) => {
        e.preventDefault()
        setTimeout(() =>   setEdit(!edit), 100)
        if (e.target.innerText.toLowerCase() === "cancel") {
            setPostValue(initialState)
            // setTimeout(() => navigate('/'), 100)
           
        }

    }

    const { title, body } = postValue

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePostStart({ postValue, id }))
        setTimeout(() => navigate('/'), 1000)
    }

    const onInputChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target;
        setPostValue({ ...postValue, [name]: value })
    }

    return (<>
        <MDBCard alignment='center' className='container'>
        <p className="h3">{edit ? "Post" : "Edit Post" }</p>
            <MDBCardBody>
                {edit ? (<>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>{body}</MDBCardText>
                    <div style={{ marginTop: "50px" }}>
                        <MDBBtn onClick={handleEdit} >{edit ? "Edit" : "Cancel"}</MDBBtn>
                        <MDBBtn className='mx-3' onClick={() => navigate('/')}>Back</MDBBtn>
                    </div>
                </>) : (<>
                    <MDBInputGroup className='mb-3' >
                        <textarea name="title" className='form-control' value={title} onChange={onInputChange} />
                    </MDBInputGroup>
                    <div className="form-outline" style={{ border: "1px solid black" }}>
                        <textarea name="body" className="form-control" id="textAreaExample1" rows="5" value={body} onChange={onInputChange} />
                    </div>
                    <div style={{ marginTop: "50px" }}>
                        <MDBBtn onClick={handleEdit} className='mx-3'>{edit ? "Edit" : "Cancel"}</MDBBtn>
                        <MDBBtn type='submit' onClick={handleSubmit}>Save</MDBBtn>
                    </div>
                </>)}
            </MDBCardBody>
        </MDBCard>
    </>
    )
}

export default PostPage