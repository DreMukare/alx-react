import React from 'react';

class BodySection extends React.Component {
	render() {
		return (
			<div className='bodysection'>
				<h2 title={this.props.title}></h2>
				{this.props.children}
			</div>
		);
	}
}

export default BodySection;
