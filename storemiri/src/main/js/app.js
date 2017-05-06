/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const React = require('react');
const ReactDOM = require('react-dom')
const client = require('./client');

class App extends React.Component {

        var root = "/api";

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

        loadFromServer(pageSize) {
            follow(client, root, [
                    {rel: 'employees', params: {size: pageSize}}]
            ).then(employeeCollection => {
                    return client({
                            method: 'GET',
                            path: employeeCollection.entity._links.profile.href,
                            headers: {'Accept': 'application/schema+json'}
                    }).then(schema => {
                            this.schema = schema.entity;
                            return employeeCollection;
                    });
            }).done(employeeCollection => {
                    this.setState({
                            employees: employeeCollection.entity._embedded.employees,
                            attributes: Object.keys(this.schema.properties),
                            pageSize: pageSize,
                            links: employeeCollection.entity._links});
            });
        }

	componentDidMount() {
//		client({method: 'GET', path: '/api/employees'}).done(response => {
//			this.setState({employees: response.entity._embedded.employees});
//		});
                this.loadFromServer(this.state.pageSize);
	}

	render() {
		return (
			<EmployeeList employees={this.state.employees}/>
		)
	}
};

class EmployeeList extends React.Component{
	render() {
		var employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
};

class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)