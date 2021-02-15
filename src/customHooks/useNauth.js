import { useEffect} from 'react';
import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const useNauth = props => {
    const { currentUser } = useSelector(mapState);

    useEffect(() => {
        if (currentUser) {
            props.history.push('./dashboard');
        }

    }, [currentUser]);

    return currentUser;
};

export default useNauth;