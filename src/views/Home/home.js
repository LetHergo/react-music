import React, { Component } from 'react'
import Slide from '@/components/Slide/slide.js'
import Recommend from '@/components/Recommend/recommend.js'
import MusicList from '@/components/MusicList/musiclist.js'
import Scroll from '@/components/Scroll/scroll.js'
import { getBanner, getRecommend, getRecommendMusic } from '@/api/home.js'
import { Tabs, Icon } from 'antd-mobile'
import './home.scss'
const tabs = [{ title: '推荐音乐' }, { title: '热歌榜' }]

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
		this.getData()
	}
	render() {
		return (
			<div style={{ height: '100%' }}>
				{/* <Scroll options={{ bounce: false }}> */}
					{this.state.slideList.length > 0 && <Slide slideList={this.state.slideList}></Slide>}
					<div className='home-main'>
						<Tabs
							useOnPan={false}
							animated={false}
							tabs={tabs}
							initialPage={0}
							// onChange={(tab, index) => {
							// 	console.log('onChange', index, tab)
							// }}
							// onTabClick={(tab, index) => {
							// 	console.log('onTabClick', index, tab)
							// }}
						>
							{/* 预留跳转位 */}
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
							<div>热歌榜=。= 待更新</div>
						</Tabs>
					</div>
				{/* </Scroll> */}
			</div>
		)
	}
}
