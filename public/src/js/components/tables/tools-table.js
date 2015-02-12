var React = require('react/addons');
var TableRow = require('./table-row');

ToolsTable = React.createClass({
	getInitialState: function () {
		return {tools: this.props.tools};
	},
	propTypes: {
		tools: React.PropTypes.array,
	},
	render: function () {
		var createTr = function (tool) {
			return <TableRow tool={tool} />
		}
		return (
			<div className="row">
				<table>
					<thead>
						<tr>
							<th width="650"> Tool </th>
							<th width="250"> Author(s) </th>
							<th width="150"> Page Count </th>
							<th width="250"> Date of Submission </th>
						</tr>
					</thead>
					<tbody>
						{this.props.tools.map(createTr)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = ToolsTable;
