import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {
    HeadWrapper ,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }
    render () {
        return (
            <HeadWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">
                        <i className="iconfont iconAa"></i>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
                            <NavSearch className={this.state.focused ? 'focused': ''}
                                       onFocus={this.handleInputFocus} onBlur={this.handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont iconmagnifier': 'iconfont iconmagnifier'}></i>
                    </SearchWrapper>
                    <Addition>
                        <Button className="writting">
                            <i className="iconfont iconfeather"></i>写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeadWrapper>
        )
    }
    handleInputFocus(){
        this.setState({
            focused: true
        })
    }
    handleInputBlur(){
        this.setState({
            focused: false
        })
    }
}
export default Header
