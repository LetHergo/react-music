import React, { Component } from 'react'
import {formatPlayCount} from '@/utils'
import './musicmore.scss'
export default class musicmore extends Component {
	render() {
		return (
			<div className='y-music-more'>
				{this.props.list &&
					this.props.list.map(item => (
						<section className='y-music-more-item' key={item.id}>
              <img src={item.coverImgUrl} alt="" className="y-music-more-img" />
							<div className='y-music-more-right'>
								<div className='y-music-more-name'>{item.name}</div>
								<div className='y-music-more-author'>
								{item.trackCount}首 来自{(item.creator && item.creator.nickname)} 播放{formatPlayCount(item.playCount)}次
								</div>
							</div>
						</section>
					))}
			</div>
		)
	}
}
