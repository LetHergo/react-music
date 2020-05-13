import React, { Component } from 'react'
import { connect } from 'react-redux'
import './player.scss'

export default class player extends Component {
	state = {
		showStart: true,
	}
	changeStart = () => {
		this.setState({
			showStart: !this.state.showStart,
		})
	}
	componentDidMount(){
		var rightcircle = this.refs.rightcircle
		var leftcircle = this.refs.leftcircle

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
							<div className='circle_coninter'>
								<div className='circle_process'>
									<div className='wrapper right'>
										<div className='circle rightcircle' ref='rightcircle'></div>
									</div>
									<div className='wrapper left'>
										<div className='circle leftcircle' ref='leftcircle'></div>
									</div>
								</div>
							</div>
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
