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
    constructor(props) {
        super(props);
    }

    getSearchInfo(show){
        if(show){
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索<SearchInfoSwitch>换一批</SearchInfoSwitch></SearchInfoTitle>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
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
                        <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
                            <NavSearch className={this.props.focused ? 'focused': ''}
                                       onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont iconmagnifier': 'iconfont iconmagnifier'}></i>
                        {this.getSearchInfo(this.props.focused)}
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
        focused: state.getIn(['header', 'focused'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
