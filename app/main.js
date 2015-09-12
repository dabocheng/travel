import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';


import Home from './components/Home/home.js';
import LoginHandler from './components/login.js';
import AboutUsHandler from './components/AboutUs.js';	
import NewsHandler from './components/News.js';


var OuterSkeleton = React.createClass({
   render() {
      return(
         <div id="root-container">
            <div className="carousal">

  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

    
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        
      </div>

      <div className="item">
        
      </div>
    </div>

    
    <a className="left carousel-control" to="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" to="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

            </div>
            <div className="top-navi">
               <div><Link to="Home">Home</Link></div>
               <div><Link to="AboutUs">About</Link></div>
               <div><Link to="News">News</Link></div>
            </div>
            <div id="main-container"><RouteHandler/></div>
            <div id="foot-container">foot</div>
         </div>
      )}
});

var App = React.createClass({  
  render() {
    return (<OuterSkeleton/>);
  }
});

var routes = (
  <Route name='app' path='/' handler={App}>
      <Route name='AboutUs' handler={AboutUsHandler}/>
      <Route name='News' handler={NewsHandler}/>
      <Route name='Login' handler={LoginHandler}/>
      <DefaultRoute name="Home" handler={Home}/>
  </Route>
);
Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});

