import React, {Component} from 'react'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
class Home extends Component{
    render () {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className="banner-img" src="/images/banner.png" alt=""/>
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                </HomeWrapper>
            </div>
        )
    }
}

export default Home
