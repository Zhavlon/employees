import {Component} from "react";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'Alex', salary: 2000, increase: false, rise: false, id: 1},
				{name: 'John', salary: 4000, increase: true, rise: false, id: 2},
				{name: 'Brandon', salary: 5500, increase: false, rise: false, id: 3},
			]
		}
		this.maxId = 4
	}

	onDelete = (id) => {
		this.setState(({data}) => ({
			data: data.filter(item => item.id !== id)
		}))
	}

	onAddEmployee = ({name, salary}) => {
		this.setState(({data}) => ({
			data: [...data, {name, salary, increase: false, rise: false, id: this.maxId += 1}]
		}))
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item
			})
		}))
	}

	render() {
		const {data} = this.state

		const total = data.length
		const toIncrease = data.filter(item => item.increase).length
		return (
			<div className="app">
				<AppInfo
					total={total}
					toIncrease={toIncrease}
				/>

				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>

				<EmployeesList
					onToggleProp={this.onToggleProp}
					onDelete={this.onDelete}
					data={data}/>
				<EmployeesAddForm
					onAddEmployee={this.onAddEmployee}
				/>
			</div>
		)
	}
}

export default App;
