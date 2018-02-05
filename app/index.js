/**
 * Created by Administrator on 2018/1/30.
 */

 //import "./css.css"  ;
// import   "./app/static/css/font-awesome/css/font-awesome.css";
// console.log("font:",font)

//自定义插件

//第三方插件

import ReactDOM from 'react-dom'
import React from "react"
//import { Provider } from 'react-redux'


//import RouterMap  from './Router'
// 创建 Redux 的 store 对象
//const store = configureStore()
 import {Provider} from "react-redux";
import configureStore from "./store/index.js"  ;

const store=configureStore();

//const {RouterMap} = require("./Router")
import  RouterMap from "./Router/index.js"
// const UI =RouterMap();
 /*8
  ReactDOM.render(
  <Provider store={store}>
  <RouterMap/>
  </Provider>
  ,  document.getElementById('root'))
  */
ReactDOM.render(
    <RouterMap/>
    ,  document.getElementById('root'))
