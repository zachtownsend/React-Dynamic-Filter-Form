import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class LinkedInput extends Component {

	state = {
		selectedParent: 1,
		selectedChild: false,
		selectedID: 1
	}

	getParents = () => {
		let parents = this.props.models.filter(function(el){
			return el.parent === 0;
		});
		return parents;
	}

	getChildren = () => {
		let children = this.props.models.filter(function(el){
			return parseInt(this.state.selectedParent, 10) === parseInt(el.parent, 10);
		}.bind(this));
		return children;
	}

	onChange = (id) => {
		this.props.onChange(id);
	}

	onParentChange = e => {
		let value = e.target.value;
		this.setState({
			selectedParent: parseInt(value, 10),
			selectedChild: false,
			selectedID: parseInt(value, 10)
		});
		this.onChange(parseInt(value, 10));
	}

	onChildChange = e => {
		let value = e.target.value;
		this.setState({
			selectedChild: parseInt(value, 10),
			selectedID: parseInt(value, 10)
		});
		this.onChange(parseInt(value, 10));
	}

	render() {
		return (
			<div>
				<select name="parent" onChange={this.onParentChange} value={this.state.selectedParent}>
					{
						this.getParents().map(function(elem, i) {
							return (
								<option key={elem.id} value={elem.id}>{elem.name}</option>
							);
						})
					}
				</select>

				<select name="child" onChange={this.onChildChange} value={this.state.selectedChild}>
					<option value="0">--Please Select--</option>
					{
						this.getChildren().map(function(elem, i) {
							return (
								<option key={elem.id} value={elem.id}>{elem.name}</option>
							);
						})
					}
				</select>
				
			</div>
		);
	}
}

// const LinkedInput = (props) => {
// 	console.log(props);
// 	return (
// 		<select name={props.name}>
// 			{props.models.map(function(elem, i) {
// 				return (
// 					<option key={elem.id} value={elem.slug}>{elem.name}</option>
// 				);
// 			})}
// 		</select>
// 	);
// }

// LinkedInput.propTypes = {
// 	models: PropTypes.array
// };

export default LinkedInput;