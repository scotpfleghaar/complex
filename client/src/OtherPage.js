import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class OtherPage extends Component {
    render() {
        return (
            < div >
                Im some other page
                <Link to ="/">Go Back Home</Link>
            < /div>
    )
        ;
    }
}

export default OtherPage;
