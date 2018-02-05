/**
 * Created by Administrator on 2018/1/31.
 */

import "./index.css"

const {getdata}=require("../../../../data/get.js")
//图片资源




import React,{Component} from "react";



class Category extends Component{
    constructor(props){
        super(props)  ;
        this.state={
            cateData:[]
        }
    }

    componentDidMount(){
        const _this=this;
        const result=getdata("http://localhost:82/catedata") ;
        result.then(function(cateData){
           //cateData=cateData  ;

           var data=cateData.data.trim()
            console.log("获取后的数据",typeof data,Array.isArray(data),data)   ;
            _this.setState({
                    cateData:data
                })
       //    console.log("获取后的数据",typeof data,Array.isArray(data),data)   ;


        })
    }

   render(){
       console.log("当前的catadata：",typeof this.state.cateData,Array.isArray(this.state.cateData),this.state.cateData)
       return(
           <div>
        333

           </div>
       )
   }






}



export default Category
