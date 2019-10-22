import React from 'react'
import PropTypes from 'prop-types'

import './loading.scss'

// Loading组件

const Loading = props => {
	const { show, text } = props
	return (
		<div className='loading-wrapper' style={{ display: show ? 'block' : 'none' }}>
			<svg
				version='1.1'
				className='loading-svg'
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='24px'
				height='30px'
				viewBox='0 0 24 30'
			>
				<rect x='0' y='0' width='4' height='10' transform='translate(0 4.726)'>
					<animateTransform
						attributeType='xml'
						attributeName='transform'
						type='translate'
						values='0 0; 0 20; 0 0'
						begin='0'
						dur='0.6s'
						repeatCount='indefinite'
					></animateTransform>
				</rect>
				<rect x='10' y='0' width='4' height='10' transform='translate(0 18.0593)'>
					<animateTransform
						attributeType='xml'
						attributeName='transform'
						type='translate'
						values='0 0; 0 20; 0 0'
						begin='0.2s'
						dur='0.6s'
						repeatCount='indefinite'
					></animateTransform>
				</rect>
				<rect x='20' y='0' width='4' height='10' transform='translate(0 8.60733)'>
					<animateTransform
						attributeType='xml'
						attributeName='transform'
						type='translate'
						values='0 0; 0 20; 0 0'
						begin='0.4s'
						dur='0.6s'
						repeatCount='indefinite'
					></animateTransform>
				</rect>
			</svg>
			<div className='loading-text'>{text}</div>
		</div>
	)
}

Loading.defaultProps = {
	text: '正在努力加载中=3=',
	show: true
}

Loading.propTypes = {
	show: PropTypes.bool,
	text: PropTypes.string
}

export default Loading
