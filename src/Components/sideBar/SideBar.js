import React from 'react';
import {Link} from 'react-router-dom';

class SideBar extends React.Component {
    state = {style: 300};

    less = () => {
        this.setState({style: 100});
    };
    more = () => {
        this.setState({style: 300});
    };

    render() {
        return (
            <div style={{width: this.state.style}}>
                <div className='item'>
                    <Link to='/nav1' className='link'>Nav1</Link>
                </div>
                <div className='item'>
                    <Link to='/nav2' className='link'>Nav2</Link>
                </div>
                <div className='item'>
                    <Link to='/nav3' className='link'>Nav3</Link>
                </div>
                <div className='resizeButton'>
                    <button onClick={this.less} className='left'></button>
                    <br/>
                    <button onClick={this.more} className='right'></button>
                </div>
            </div>
        )
    }
}

export default SideBar;