import React, { Component } from 'react'

import './musiclist.scss'
export default class musiclist extends Component {
	render() {
		return (
			<div className='y-music'>
				{this.props.list &&
					this.props.list.map(item => (
						<section className='y-music-item' key={item.id}>
							<div className='y-music-left'>
								<div className='y-music-name'>{item.name}</div>
								<div className='y-music-author'>
									{(item.song && item.song.artists[0].name) || (item.artists && item.artists[0].name)}-
									{(item.song && item.song.album.name) || (item.album && item.album.name)}
								</div>
							</div>
							<i className='iconfont icon-bofang'></i>
						</section>
					))}
			</div>
		)
	}
}
