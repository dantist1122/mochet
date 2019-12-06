import React from 'react';

import SideBar from "./sideBar/SideBar";
import Header from "./rightComponent/Header";
import Content from "./rightComponent/Content";
import Footer from "./rightComponent/Footer";


class App extends React.Component {
    render() {
        return (
            <div className='container'>

                <div className='sideBar'>
                    <SideBar/>
                </div>

                <div className='rightSide'>

                    <div className='header'>
                        <Header/>
                    </div>

                    <div className='content'>
                        <Content {...this.props}/>
                    </div>

                    <div className='footer'>
                        <Footer/>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;