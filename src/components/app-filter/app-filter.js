import "./app-filter.css";

const AppFilter = ({setFilter, filter}) => {
	const buttonsData = [
		{name: 'all', label: 'Все сотрудники'},
		{name: 'rise', label: 'На повышение'},
		{name: 'rich', label: 'З/П больше 1000$'}
	]

	const buttons = buttonsData.map(({name, label}, i) => {
		const active = filter === name
		const clazz = active ? 'btn-light' : 'btn-outline-light'
		return (
			<button
				key={i}
				onClick={() => setFilter(name)}
				data-filter={name}
				type="button"
				className={`btn ${clazz}`}>
				{label}
			</button>
		)
	})

	return (
		<div className="btn-group">
			{buttons}
		</div>
	)
}

export default AppFilter;