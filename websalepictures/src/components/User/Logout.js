import React from 'react';
import {Link} from 'react-router-dom';
function Logout(){
    return(
        <Link className='btn-Logout' to='/login'>LOGOUT</Link>
    );
}

export default Logout;