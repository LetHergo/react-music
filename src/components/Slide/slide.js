import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './slide.scss'
export default class Slide extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<WingBlank>
				<Carousel
					autoplay
					infinite
					>
					{this.props.slideList.map(item => (
						<img src={item.imageUrl} alt={item.typeTitle} key={item.targetId} />
					))}
				</Carousel>
			</WingBlank>
		);
	}
}
