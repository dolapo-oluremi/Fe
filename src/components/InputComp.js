import { MDBInputGroup } from 'mdb-react-ui-kit';
import React, { useEffect, useRef } from 'react';

const InputComp = ({handleSearch}) => {
  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);
  return (
    <div>
        <MDBInputGroup className='mb-3'>
        <input className='form-control' type='text' onChange={handleSearch} placeholder="Search titles" ref={inputReference}/>
      </MDBInputGroup>
    </div>
  )
}

export default InputComp