import React from 'react'
import {connect} from 'react-redux'
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

const Header = (props) => {
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
                    <CSSTransition in={props.focused} timeout={200} classNames="slide">
                        <NavSearch className={props.focused ? 'focused': ''}
                                   onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont iconmagnifier': 'iconfont iconmagnifier'}></i>
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
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            const action = {
                type: 'search_focus'
            }
            dispatch(action)
        },
        handleInputBlur(){
            const action = {
                type: 'search_blur'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
