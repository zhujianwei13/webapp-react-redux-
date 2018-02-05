/**
 * Created by Administrator on 2018/1/31.
 */

import React,{Component} from "react";
import   "../../static/css/font-awesome/css/font-awesome.css";
import "./index.css"
import {Link} from 'react-router-dom'
class Head extends Component{
    constructor(props){
        super(props);
    }




    render(){
        return(
            <div className="flex">
                <div>
                    <span> <Link to="/city">北京</Link></span>

<i className="fa fa-sort-desc"></i>
                </div>

                <div>
                    <label htmlFor="search" className="search">

                    </label>         <input type="text" placeholder="输入关键字" id="search"/>
                </div>

                <div>
                    <i className="fa fa-user-circle-o fa-2x  bg"></i>
                </div>
            </div>
        )
    }



}



export default Head;
