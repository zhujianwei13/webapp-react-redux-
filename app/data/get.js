/**
 * Created by Administrator on 2018/1/31.
 */

import "whatwg-fetch"
import "es6-promise"

const axios=require("axios")

const getdata=function(url,nparams){

    let result=axios.get(url,nparams)
    return result

}



module.exports={
    getdata
}
