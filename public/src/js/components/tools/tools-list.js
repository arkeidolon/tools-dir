var React = require('react/addons');
var ToolPanel = require('./tool-panel');

ToolsTable = React.createClass({
	getInitialState: function () {
		return {tools: this.props.tools, tool: this.props.tools[0]};
	},
	propTypes: {
		tools: React.PropTypes.array,
	},
	setCurrentTool: function (tool) {
		this.setState({tool: tool});
	},
	render: function () {
		var createTr = function (tool) {
			return <ToolPanel tool={tool} onClick={this.setCurrentTool.bind(this, tool)}/>
		}
		return (
			<div>
				<div className="column medium-6 medium-push-6">
					<div className="panel radius white">
						<h3>{this.state.tool.title}</h3>
						<p> {this.state.tool.abstract} </p>
						<div className="panel small-padding">
							<div className="row">
								<span className="column small-4 tool-info">
									<i className="foundicon-thumb-up blue"> </i>
								</span>
								<span className="column small-4 tool-info">
									<i className="foundicon-thumb-down red"> </i>
								</span>
								<span className="column small-4 tool-info">
									<i className="foundicon-chat green"> </i>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="column medium-pull-6 medium-6 fixed-container">
					<div>
						{this.props.tools.map(createTr, this)}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ToolsTable;