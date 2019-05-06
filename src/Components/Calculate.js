import React, { Component } from 'react';
import './Calculate.css';

class addate extends Component {
	state = {
		table: [''],
	}
	render() {
		return (
			<div className="row">
				<div className="col m4 offset-m4">
					<div className="row padding-screen">
						<div className="col m12 screen valign-wrapper">
							<div className="col m12">{this.state.table == '' ? '0' : this.state.table}</div>
						</div>
					</div>
					<div className="row">
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={this.reset}>AC</button>
						</div>
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add('%')}>%</button>
						</div>
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add('/')}>/</button>
						</div>
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add('*')}>x</button>
						</div>
					</div>
					<div className="row">
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add(7)}>7</button>
						</div>
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add(8)}>8</button>
						</div>
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add(9)}>9</button>
						</div>
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add('-')}>-</button>
						</div>
					</div>
					<div className="row">
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add(4)}>4</button>
						</div>
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add(5)}>5</button>
						</div>
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add(6)}>6</button>
						</div>
						<div className="col m3 center-align">
							<button className="btn-floating waves-light red" onClick={() => this.add('+')}>+</button>
						</div>
					</div>
					<div className="row equal">
						<div className="col m9">
							<div className="row">
								<div className="col m4 center-align">
									<button className="btn-floating waves-light red" onClick={() => this.add(1)}>1</button>
								</div>
								<div className="col m4 center-align">
									<button className="btn-floating waves-light red" onClick={() => this.add(2)}>2</button>
								</div>
								<div className="col m4 center-align">
									<button className="btn-floating waves-light red" onClick={() => this.add(3)}>3</button>
								</div>
							</div>
							<div className="row">
								<div className="col m4 center-align">
									<button className="btn-floating waves-light red" onClick={this.del}>DEL</button>
								</div>
								<div className="col m4 center-align">
									<button className="btn-floating waves-light red" onClick={() => this.add(0)}>0</button>
								</div>
								<div className="col m4 center-align">
									<button className="btn-floating waves-light red" onClick={() => this.add('.')}>.</button>
								</div>
							</div>
						</div>
						<div className="col m3">
							<div className="row valign-wrapper btn-equal" onClick={this.result}>
								<div className="col m12">
									<div>=</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
	result = () => {
		let result = "";
		let array = this.state.table;
		for ( let item of array) {
			result = result + item
		}
		this.setState({
			table: [eval(result)]
		})
		
	}

	add = (e) => {
		this.setState({
			table: [...this.state.table, e]
		})
	}

	reset = () => {
		this.setState({
			table: []
		})
	}

	del = () => {
		let index = this.state.table.length - 1;
		let array = [...this.state.table];
		array.splice(index,1);
		this.setState({
			table: array
		})
	}
}

export default addate;