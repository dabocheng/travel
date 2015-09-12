import React from 'react';
require("./index.less");

var AboutUs = React.createClass({ 
	getInitialState: function() {
		// naming it initialX clearly indicates that the only purpose
		// of the passed down prop is to initialize something internally
		return {myname: this.props.myname};
	},
	getDefaultProps: function(){
		return {
			myname: 0
		};
	},
	componentWillMount: function(){
		this.setState({myname: 0});
	},
	render() {
		var instance = this;

		setTimeout(function(){
			instance.setState({
				myname: instance.state.myname++
			});
		},1000);

		return(<Test defaultName = {this.state.myname} />);
	}
});

var Test = React.createClass({
	getInitialState: function() {
		// naming it initialX clearly indicates that the only purpose
		// of the passed down prop is to initialize something internally
		return {defaultName: this.props.defaultName};
	},
	getDefaultProps: function(){
		return {
			name : 'gulugulu',
			// myname: 'Dabo balabala'
		};
	},
	componentWillReceiveProps: function(nextProps){
		// console.log(nextProps);
		if(nextProps.defaultName > 10){
			this.setState({defaultName: this.props.defaultName});		
		}
	},
	render(){

		return(<div>AAAA= {this.state.defaultName}</div>);
	}
});

export default AboutUs;  