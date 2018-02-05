/**
 * Created by Administrator on 2018/1/31.
 */

/**
 * Created by Administrator on 2018/1/31.
 */
const {ROOT} =require("../../constant/constant.config.js") ;
//css  js image资源
import "./index.css"
//自适应代码

//自定义组件


//第三方插件
import React,{Component} from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
 import * as useraction from "../../acrions/userinfo.js"
class City extends Component{
    constructor(props){
        super(props);
    }




    render(){
        return(
            <div>
                <ul>
                    <li>南京</li>
                    <li>南京</li>
                    <li>南京</li>
                </ul>

            </div>
        )
    }
}



function mapStateToProps(state)     {
    return {

    }
}

function mapDispatchToProps(dispatch){
    userinfoActions:bindActionCreators(useraction,dispatch)
}

export default City

//export default  connect(mapStateToProps,mapDispatchToProps)(City)
