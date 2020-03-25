import React, { Component } from 'react'
import Drawer from '@/components/Drawer/'
import Items from '@/components/Items/'
import {  withRouter } from 'react-router-dom'
import './header.scss'

class HomeHead extends Component {
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
	goSearch = () => {
		this.props.history.push('/search')
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

				<i className='iconfont icon-search' onClick={this.goSearch}></i>
				<Drawer showDrawer={this.state.showDrawer} sidebar={Items} openFlag={this.openDrawer}></Drawer>
			</div>
		)
	}
}

export default withRouter(HomeHead)