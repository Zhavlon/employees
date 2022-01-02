import './employees-list-item.css';

const EmployeesListItem = (props) => {
	const {name, salary, onDelete, increase, rise, onToggleProp} = props

	let styles = 'list-group-item d-flex justify-content-between'
	if (increase) {
		styles += ' increase'
	}

	if (rise) {
		styles += ' like'
	}

	return (
		<li className={styles}>
				<span
					onClick={onToggleProp}
					data-toggle='rise'
					className="list-group-item-label">{name}</span>
			<input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
			<div className='d-flex justify-content-center align-items-center'>
				<button
					onClick={onToggleProp}
					data-toggle='increase'
					type="button"
					className="btn-cookie btn-sm ">
					<i className="fas fa-cookie"></i>
				</button>

				<button
					onClick={onDelete}
					type="button"
					className="btn-trash btn-sm ">
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	)
}

export default EmployeesListItem;