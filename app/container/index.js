/**
 * Created by Administrator on 2018/1/31.
 */

import React,{Component} from "react";
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'
//import {bindActionCreators} from "redux";
//import * as userinfoAction  from "../acrions/userinfo.js";
//import { CITYNAME } from '../constant/localStorage.js'


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            initDone: true
        }
    }



    render(){
         return   (
      <div>
          {
              this.state.initDone
                  ? this.props.children
                  : <div>正在加载...</div>
          }
          <div>
              公共底部
          </div>
      </div>
        )
    }
}





export default App

