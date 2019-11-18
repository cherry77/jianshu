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
        const {focused, mouseEnter, list, page, totalPage, handleMouseEnter,handleMouseLeave, handleClickPage} = this.props
        const pageList = [];
        const newList = list.toJS(list)
        if(newList.length){
            for(let i = (page - 1) * 10; i < page * 10; i ++){
                if(newList[i]){
                    pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
                }
            }
        }

        if(focused || mouseEnter){
            return (
                <SearchInfo onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch
                        onClick={() => handleClickPage(page, totalPage, this.spinIcon)}>
                        <i ref={(icon) => {this.spinIcon = icon}} className="iconfont iconspin"></i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>{pageList}</SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }
    render () {
        const {focused, handleInputFocus, handleInputBlur, list} = this.props
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
                                       onFocus={() => handleInputFocus(list)}
                                       onBlur={handleInputBlur}></NavSearch>
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseEnter: state.getIn(['header', 'mouseEnter'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            list.size === 0 && dispatch(actionCreators.getSearchHotList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleClickPage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if(originAngle){
                originAngle = parseInt(originAngle, 10)
            }else{
                originAngle = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg'

            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
