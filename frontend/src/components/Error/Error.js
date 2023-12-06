import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { selectError, cleanError } from '../../redux/slices/errorSlice';

import 'react-toastify/dist/ReactToastify.css';

const Error = () => {
    const dispatch = useDispatch(),
        errorMessange = useSelector(selectError)
    useEffect(() => {
        if (errorMessange !== '') {
            toast.warn(errorMessange)
            dispatch(cleanError())
        }
    }, [errorMessange, dispatch])
    return <ToastContainer position='top-right' autoClose={2000} />
}

export default Error