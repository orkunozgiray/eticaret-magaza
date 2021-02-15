
import { useNauth } from '../customHooks';
import { withRouter } from 'react-router-dom';

const WithNauth = props => useNauth(props) && props.children;

export default withRouter(WithNauth);
