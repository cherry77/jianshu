import React, {Component}from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {actionCreators}  from './store'
import {
    HeadWrapper ,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    NavSearch,
    Addition,
    Button
} from './style'

class Header extends Component {
    getSearchInfo(){
        const {focused, list} = this.props
        if(focused){
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索<SearchInfoSwitch>换一批</SearchInfoSwitch></SearchInfoTitle>
                    <SearchInfoList>
                        {list.map((item) => {
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }
    render () {
        const {focused, handleInputFocus, handleInputBlur} = this.props
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
                        <CSSTransition in={focused} timeout={200} classNames="slide">
                            <NavSearch className={focused ? 'focused': ''}
                                       onFocus={handleInputFocus} onBlur={handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont iconmagnifier': 'iconfont iconmagnifier'}></i>
                        {this.getSearchInfo()}
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
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus())
            dispatch(actionCreators.getSearchHotList())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
