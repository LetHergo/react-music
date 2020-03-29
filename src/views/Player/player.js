import React, { Component } from 'react'
import './player.scss'

export default class player extends Component {
	state = {
		showStart: true
	}
	changeStart = () => {
		this.setState({
			showStart: !this.state.showStart
		})
	}
	render() {
		return (
			<div className='y-player'>
				<div className='y-player-mini'>
					<div className='y-player-mini-left'>
						<img
							src='http://p2.music.126.net/M6I9g1EkDxbgl2j5Ygi-lQ==/130841883720226.jpg?param=100y100'
							className='y-player-mini-img'
							alt=''
						/>
						<div>
							<h2>歌曲名称</h2>
							<span>歌队名称</span>
						</div>
					</div>
					<div className='y-player-mini-right'>
						<div className='y-player-mini-control'>
							{this.state.showStart === true ? (
								<i className='iconfont icon-bofang' onClick={this.changeStart}></i>
							) : (
								<i className='iconfont icon-zanting' onClick={this.changeStart}></i>
							)}
						</div>
						<i className='iconfont icon-gengduo'></i>
					</div>
				</div>
			</div>
		)
	}
}
