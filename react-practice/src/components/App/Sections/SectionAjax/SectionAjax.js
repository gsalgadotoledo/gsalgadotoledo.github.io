import React from 'react';

class SectionAjax extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			userList: []
		};
	}

	componentDidMount() {
		let request = new XMLHttpRequest();
		request.onreadystatechange = () => {
			if(request.readyState === 4) {
				if(request.status === 200) {
					this.setState({
						userList: JSON.parse(request.responseText).data
					});
				} else {
					alert('There is an error trying to retrive mock-users.json data')
				}
			}
		}
		request.open('get', this.props.usersUrl);
		request.send();
	}

	render() {
		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th>id</th>
						<th>first_name</th>
						<th>last_name</th>
						<th>email</th>
						<th>gender</th>
						<th>ip_address</th>
					</tr>
				</thead>
				<tbody>
				{this.state.userList.map((data) => {
					return <tr key={data.id}>
						<td>{data.id}</td>
						<td>{data.first_name}</td>
						<td>{data.last_name}</td>
						<td>{data.email}</td>
						<td>{data.gender}</td>
						<td>{data.ip_address}</td>
					</tr>
				})}
				</tbody>
			</table>
		);
	}
}

export default SectionAjax