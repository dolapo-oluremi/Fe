import { MDBInputGroup } from 'mdb-react-ui-kit';
import React, { useEffect, useRef } from 'react';

const InputComp = ({ handleSearch }) => {
  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);
  return (
    <div data-testid='searchInputDiv' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <p style={{width:"120px"}}>Search titles</p>
      &nbsp;
      <MDBInputGroup className="mb-3">
        <input className='form-control' type='text' onChange={handleSearch} ref={inputReference} />
      </MDBInputGroup>
    </div>
  )
}

export default InputComp