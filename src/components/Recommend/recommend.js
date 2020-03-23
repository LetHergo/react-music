import React, { Component } from 'react'
import './recommend.scss'
// const list = [1, 2, 3, 4]
export default class recommend extends Component {
	// constructor(props) {
	// 	super(props)
	// }
	render() {
		return (
			<article className='y-recommend'>
				{ this.props.list && this.props.list.map(item => {
					return (
						<section className="y-recommend-item" key={item.name}>
							<div className="y-recommend-imgWrapper">
								<img src={item.picUrl} alt={item.name} />
								{/* <div className='y-recommend-number'>{item.playCount}</div> */}
							</div>
							<div className='y-recommend-name'>{item.name}</div>
						</section>
					)
				})}
			</article>
		)
	}
}
