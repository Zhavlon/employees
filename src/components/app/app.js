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
				{name: 'Alex', salary: 500, increase: false, rise: true, id: 1},
				{name: 'John', salary: 4000, increase: true, rise: true, id: 2},
				{name: 'Brandon', salary: 5500, increase: false, rise: false, id: 3},
			],
			term: '',
			filter: 'all'
		}
		this.maxId = 4
	}

	onDelete = (id) => {
		this.setState(({data}) => ({
			data: data.filter(item => item.id !== id)
		}))
	}

	onAddEmp = ({name, salary}) => {
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

	onSearchEmp = (items, value) => {
		if (!value) {
			return items
		}

		return items.filter(item => {
			return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
		})
	}

	setSearch = (term) => {
		this.setState({term})
	}

	onFilterEmp = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise)
			case 'rich':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	setFilter = (filter) => {
		this.setState({filter})
	}

	render() {
		const {data, term, filter} = this.state

		const total = data.length
		const toIncrease = data.filter(item => item.increase).length
		const visibleData = this.onFilterEmp(this.onSearchEmp(data, term), filter)

		return (
			<div className="app">
				<AppInfo
					total={total}
					toIncrease={toIncrease}
				/>

				<div className="search-panel">
					<SearchPanel setSearch={this.setSearch}/>
					<AppFilter
						filter={filter}
						setFilter={this.setFilter}/>
				</div>

				<EmployeesList
					onToggleProp={this.onToggleProp}
					onDelete={this.onDelete}
					data={visibleData}/>
				<EmployeesAddForm
					onAddEmp={this.onAddEmp}
				/>
			</div>
		)
	}
}

export default App;
