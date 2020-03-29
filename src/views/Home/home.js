import React, { Component } from 'react'
import Slide from '@/components/Slide/slide.js'
import Recommend from '@/components/Recommend/recommend.js'
import MusicList from '@/components/MusicList/musiclist.js'
// import Scroll from '@/components/Scroll/scroll.js'
import BScroll from 'better-scroll'
import { getBanner, getRecommend, getRecommendMusic } from '@/api/home.js'
import { Icon } from 'antd-mobile'
import './home.scss'

export default class index extends Component {
	constructor() {
		super()
		this.state = {
			slideList: [],
			recommendList: [],
			musicList: []
		}
	}
	getData() {
		getBanner().then(res => {
			this.setState({
				slideList: res.banners
			})
		})
		getRecommend({ limit: 9 }).then(res => {
			this.setState({
				recommendList: res.result
			})
		})
		getRecommendMusic().then(res => {
			this.setState({
				musicList: res.result
			})
		})
	}
	componentDidMount() {
		const wrapper = document.querySelector('.home-wrapper')
	  new BScroll(wrapper, {})
		this.getData()
	}
	render() {
		return (
			<div className='home-wrapper' style={{ height: '100%' }}>
				<div>
					{this.state.slideList.length > 0 && <Slide slideList={this.state.slideList}></Slide>}
					<div className='home-main'>
						<div>
							<div className='home-title'>
								推荐歌单<Icon type='right'></Icon>
							</div>
							<Recommend list={this.state.recommendList}></Recommend>
							<div className='home-title'>
								推荐新音乐<Icon type='right'></Icon>
							</div>
							<MusicList list={this.state.musicList}></MusicList>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
