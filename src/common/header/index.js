import React, {Component} from 'react'
import {
    HeadWrapper ,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style'

class Header extends Component{
    render () {
        return (
            <HeadWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavSearch></NavSearch>
                    <Addition>
                        <Button className="writting">写文章</Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeadWrapper>
        )
    }
}
export default Header
