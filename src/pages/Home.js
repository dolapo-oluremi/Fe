import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBSpinner, MDBTable, MDBTableBody, MDBTableHead, MDBTypography } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import InputComp from '../components/InputComp'
import { loadPostsStart } from '../redux/actions'

const Home = () => {
    const dispatch = useDispatch()
    const { posts, loading } = useSelector(state => state.data)
    useEffect(() => {
        dispatch(loadPostsStart())
    }, [])

    const [searchTexts, setSearchTexts] = useState('');
    const handleSearch = (e) => {
        setSearchTexts(e.target.value)
    }

    if (loading) {
        return (
            <div className='d-flex justify-content-center ' data-testid="home">
                <MDBSpinner color='success'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        )
    }

    return (
        <div className='container' data-testid="home" >
            <p className="h3">Welcome</p>
            <InputComp handleSearch={handleSearch} />
            <br />
            {posts.filter((item) => {
                if (searchTexts === '') {
                    return item
                }
                else if (item.title.toLowerCase().includes(searchTexts.toLowerCase())) {
                    return item
                }
            }).map((item, index) => (
                <Link to={`/post/${item.id}`} key={index}>
                    <MDBCard className='mb-2'>
                        <MDBCardBody>
                            <MDBTypography blockquote className='mb-0'>
                                <p>{item.title}</p>
                            </MDBTypography>
                        </MDBCardBody>
                    </MDBCard>
                </Link>
            ))}

        </div>
    )
}

export default Home