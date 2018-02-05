/**
 * Created by Administrator on 2018/2/1.
 */

import * as actionTypes from '../constant/userinfo'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}
