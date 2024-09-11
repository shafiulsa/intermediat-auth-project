import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {

     const authInfo= useContext(AuthContext);

     console.log(authInfo);

    return (
        <div>
            <h3 className="text-3xl text-bold">this is home</h3>

            <h3 className='text-4xl text-green-700'>{authInfo.name}</h3>
        </div>
    );
};

export default Home;