import React, { Component } from 'react'
import Drawer from '@comp/Drawer/'
import './header.scss'

export default class HomeHead extends Component {
	constructor(props) {
		super(props)
		this.state = {
			//是否打开抽屉
			showDrawer: false
		}
	}
	openDrawer = state => {
		console.log('?')
		this.setState({
			showDrawer: state
		})
	}
	render() {
		return (
			<div className='y-home-head'>
				<div
					className='iconfont icon-duosetubiao'
					onClick={() => {
						this.openDrawer(true)
					}}
				></div>
				<div>摸鱼听歌</div>
				<div className='iconfont icon-Music'></div>
				<Drawer showDrawer={this.state.showDrawer} openFlag={this.openDrawer}></Drawer>
			</div>
		)
	}
}
