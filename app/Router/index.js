/**
 * Created by Administrator on 2018/1/31.
 */
import React,{Component} from "react"
import {
    BrowserRouter as Router,
    Route ,Switch
} from 'react-router-dom'



import App from "../container/index"
import Home from "../container/home/index.js"
import City from "../container/city/index.js"



 const RouterMaps=function(){
   return (
       <Router>
           <App>
               <Switch>
                   <Route  exact  path='/' component={Home} />
                   <Route  exact  path='/city' component={City} />
               </Switch>
           </App>
       </Router>
   )
}




class RouterMap extends Component {
constructor(props){
    super(props)
}


    render(){
        return (
            <Router>
                <App>
                    <Switch>
                        <Router  exact  path='/' component={Home} />
                        <Route    path='/city' component={City} />
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default RouterMaps;
//module.exports={RouterMap }
