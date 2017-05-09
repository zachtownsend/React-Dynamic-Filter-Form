import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class LinkedInput extends Component {

	state = {
		selectedParent: 1,
		selectedChild: false,
		selectedID: 1
	}

	getParents = () => {
		let parents = [];
		for (var i = this.props.models.length - 1; i >= 0; i--) {
			if(this.props.models[i].parent === 0) {
				parents.push({
					value: this.props.models[i].id,
					label: this.props.models[i].name
				});
			}
		}
		return parents;
	}

	getChildren = () => {
		let children = [];
		for (var i = this.props.models.length - 1; i >= 0; i--) {
			if(parseInt(this.state.selectedParent, 10) === parseInt(this.props.models[i].parent, 10)) {
				children.push({
					value: this.props.models[i].id,
					label: this.props.models[i].name
				});
			}
		}
		return children;
	}

	onChange = (state) => {
		this.props.onChange(state);
	}

	onParentChange = e => {
		let change = e === null ?
			{
				selectedParent: 0,
				selectedChild: false,
				selectedID: 0
			} :
			{
				selectedParent: parseInt(e.value, 10),
				selectedChild: false,
				selectedID: parseInt(e.value, 10)
			};
		this.setState(change);
		this.onChange(change);
	}

	onChildChange = e => {
		let change = {
			selectedChild: parseInt(e.value, 10),
			selectedID: parseInt(e.value, 10)
		}
		this.setState(change);
		this.onChange(change);
	}

	render() {
		return (
			<div>
				<Select 
					name="parent"
					value={this.state.selectedParent}
					options={this.getParents()}
					onChange={this.onParentChange}
				/>

				<Select 
					name="child"
					value={this.state.selectedChild}
					options={this.getChildren()}
					onChange={this.onChildChange}
				/>
			</div>
		);
	}
}

export default LinkedInput;