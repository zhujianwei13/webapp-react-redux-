/**
 * Created by Administrator on 2018/1/31.
 */

import * as actionTypes from '../constant/userinfo'

const initialState = {}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}
