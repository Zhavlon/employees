import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {
	return (
		<ul className="app-list list-group">
			{data.map((item) => {
				const {id, ...itemProps} = item
				return <EmployeesListItem
					onDelete={() => onDelete(id)}
					key={id}
					{...itemProps}/>;
			})}
		</ul>
	)
}

export default EmployeesList;