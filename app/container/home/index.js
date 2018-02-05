/**
 * Created by Administrator on 2018/1/31.
 */
const {ROOT} =require("../../constant/constant.config.js") ;
//css  js image资源
import "./index.css"
//自适应代码
import "../../static/js/fontSize" ;
import   "../../static/css/font-awesome/css/font-awesome.css";
//自定义组件
 import Head from "../../component/head" ;
import Category  from "./subpage/category"
//第三方插件
import React,{Component} from "react";


import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userinfoAction from "../../acrions/userinfo.js";

class Home extends Component{
    constructor(props){
        super(props);
    }




    render(){
        return(
            <div>
                <Head/>
                <Category/>

            </div>
        )
    }
}



function mapStateToProps(state){
                  return {
                      userinfo:state.userinfo
                  }
}


function mapDispatchToProps(dispatch){
    userinfoActions:bindActionCreators(userinfoAction,dispatch)
}

export default Home

//export default  connect(mapStateToProps,mapDispatchToProps)(Home)
