import React, { Component } from 'react'
import { SearchBar, Tabs } from 'antd-mobile'
import { searchMusic } from '@/api/search'
import BScroll from 'better-scroll'

import classnames from 'classnames'
import MusicList from '@/components/MusicList/musiclist.js'
import MusicListMore from '@/components/MusicMore/musicmore.js'

import './search.scss'
const tabs = [
	{
		title: '单曲'
	},
	{
		title: '歌单'
	}
]
export default class search extends Component {
	state = {
		value: '',
		showTabs: false,
		musicList: [],
		collectionList: []
		// searchType: 1 
	}
	componentDidMount() {
		this.autoFocusInst.focus()
	}
	componentWillUnmount() {
		if (this.scroll) {
			this.scroll.destroy()
		}
		if (this.scrollMore) {
			this.scrollMore.destroy()
		}
	}
	searchSubmit = value => {
		this.setState({ value }, () => {
			// 同时请求
			this.getData(1)
			this.getData(1000)
		})
	}
	getData = type => {
		const { value } = this.state
		//1音乐 1000歌单 type
		searchMusic({
			keywords: value,
			type
		}).then(res => {
			console.log(res.result)
			if (type === 1) {
				const wrapper = document.querySelector('.y-search-music')
				this.setState({ musicList: res.result.songs })
				this.scroll = new BScroll(wrapper, {})
			} else {
				const wrapper = document.querySelector('.y-search-music-more')
				this.setState({ collectionList: res.result.playlists })
				this.scrollMore = new BScroll(wrapper, {})
			}
			this.setState({ showTabs: true })
		})
	}
	render() {
		return (
			<div className='y-search'>
				<SearchBar
					placeholder='请输入音乐名'
					onSubmit={value => this.searchSubmit(value)}
					ref={ref => (this.autoFocusInst = ref)}
				/>
				<div className='y-search-wrapper'>
					<div
						className={classnames('y-search-main', {
							'y-search-show': this.state.showTabs
						})}
					>
						<Tabs
							tabs={tabs}
							initialPage={0}
							swipeable={false}
							useOnPan={false}
							animated={false}
							onTabClick={this.changeTab}
						>
							<div className='y-search-section y-search-music'>
								<MusicList list={this.state.musicList}></MusicList>
							</div>
							<div className='y-search-section y-search-music-more'>
								<MusicListMore list={this.state.collectionList}></MusicListMore>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		)
	}
}
