import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const data = [
	{name: 'Alex', salary: 2000, increase: false},
	{name: 'John', salary: 4000, increase: true},
	{name: 'Brandon', salary: 5500, increase: false},
]

function App() {
	return (
		<div className="app">
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>

			<EmployeesList data={data}/>
			<EmployeesAddForm/>
		</div>
	);
}

export default App;
