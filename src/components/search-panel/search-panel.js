import './search-panel.css';
import {Component} from "react";

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	setSearch = (e) => {
		const term = e.target.value
		this.setState({term})
		this.props.setSearch(term)
	}

	render() {
		const {term} = this.state
		return (
			<input
				onChange={this.setSearch}
				value={term}
				type="text"
				className="form-control search-input"
				placeholder="Найти сотрудника"/>
		)
	}
}

export default SearchPanel;