import { useEffect } from 'react';
import { isAuthenticated } from './auth';
import { useNavigate, useLocation } from 'react-router-dom';

function Protect(props) {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // we need to add the route for the art section in the match and redirect if theyre not verified
        if (!isAuthenticated() && location.pathname.match())
        navigate('');

        if (isAuthenticated() && (location.pathname.match()))
        navigate('')
    }, []);

    return (
        <>
        {props.children}
        </>
    )
}

export default Protect;

