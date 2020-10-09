import React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

const FourZeroFour: React.FC<Props> = () => {
  return (
    <div>
      <h1>The Page You Are Looking For Does Not Exist.</h1>
      <h1>Please Verify That The URL You Typed In Has No Typos</h1>
      <h1>
        <Link to={"/"} >Click Here To Return To FatKatChat's Home Page</Link>
      </h1>
    </div>
  );
}

export default FourZeroFour;