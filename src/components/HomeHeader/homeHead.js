import React, { Component } from 'react'
import Drawer from '@/components/Drawer/'
import Items from '@/components/Items/'
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
				<i
					className='iconfont icon-duosetubiao'
					onClick={() => {
						this.openDrawer(true)
					}}
				></i>
				<i className='iconfont icon-Music'></i>

				<i className='iconfont icon-search'></i>
				<Drawer showDrawer={this.state.showDrawer} sidebar={Items}  openFlag={this.openDrawer}>
				</Drawer>
			</div>
		)
	}
}
