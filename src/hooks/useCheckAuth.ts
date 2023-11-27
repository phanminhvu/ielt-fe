import { useEffect } from 'react';
import { authActions } from 'redux/creators/modules/auth';
import useSagaCreators from './useSagaCreators';

const useCheckAuth = () => {
    const { dispatch } = useSagaCreators();

    useEffect(() => {
        dispatch(authActions.checkAuth)
    }, [dispatch]);
}

export default useCheckAuth;