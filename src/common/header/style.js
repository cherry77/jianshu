import Styled from 'styled-components'
import logoPic from './../../asset/logo.png'

export const HeadWrapper = Styled.div `
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = Styled.a.attrs({
    href: '/'
}) `
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = Styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;
export const NavItem = Styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left
        
    }
    &.right{
        float: right
        color: #969696
    }
    &.active{
        color: #ea6f5a;
    }
`;
export const SearchWrapper = Styled.div`
    position: relative;
    float: left;
    .iconmagnifier{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        &.focused{
            background: #969696;
            color: #fff
        }
    }
`;
export const SearchInfo = Styled.div`
    position: absolute;
    top: 56px;
    width: 240px;
    padding: 0 15px;
    box-shadow: 0 0 8px rgba(0,0,0,.2)
`;
export const SearchInfoTitle = Styled.div`
   margin-top: 20px;
   margin-bottom: 15px;
   line-height: 20px;
   font-size: 14px;
   color: #969696
`;

export const SearchInfoSwitch = Styled.span`
   float: right    
   font-size: 13px;
   .iconspin{
     display: block;
     float: left; 
     font-size: 12px;
     margin-right: 2px;
     transition: all .2s ease-in;
     transform-origin: center;
   }
`;
export const SearchInfoList = Styled.span`
   overflow:hidden;
`;
export const SearchInfoItem = Styled.a`
   display: block;
   float: left;
   line-height: 20px;
   padding: 0 5px;
   border: 1px solid #ddd;
   font-size: 12px;
   margin-right: 10px;
   margin-bottom: 10px;
   border-radius: 3px;
`;

export const NavSearch = Styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width: 240px;
    }
    &.slide-enter{
        transition: all .2s;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s;
    }
    &.slide-exit-active{
        width: 160px;
    }
`;

export const Addition = Styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;
export const Button = Styled.div`
    float: right;
    padding: 0 20px;
    margin-top: 9px;
    margin-right: 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149
    font-size: 14px;
    &.reg{
        color: #ec6149
    }
    &.writting{
        color: #fff;
        background: #ec6149
    }
`;

// export const Addition = Styled.div`
//
//
// `;
// export const Addition = Styled.div`
//
// `;
