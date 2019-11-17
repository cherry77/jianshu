import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const getSearchHotList = () => {
    return (dispatch) => {
        axios.get('/api/headerSearchHotList.json').then(res => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('error')
        })
    }
}
