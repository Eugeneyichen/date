import React,{ Component } from 'react'
import propTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const { handleDel,content } = this.props;	
		return(
			<li onClick={handleDel}>
				{content}
			</li>
		)
	}
}

Item.propTypes = {
	index:propTypes.number,
	handleDel:propTypes.func,
	content:propTypes.string.isRequired
}
Item.defaultProps = {
	content:'举例'
}

export default Item


