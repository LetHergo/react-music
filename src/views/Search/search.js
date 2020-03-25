import React, { Component } from 'react'
import { SearchBar, Tabs } from 'antd-mobile'
import { searchMusic } from '@/api/search'
import BScroll from 'better-scroll'

import classnames from 'classnames'
import MusicList from '@/components/MusicList/musiclist.js'

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
		collectionList: [],
		searchType: 1
	}
	componentDidMount() {
		this.autoFocusInst.focus()
	}
	searchSubmit = value => {
		this.setState({ value }, () => {
			this.getData()
		})
	}
	getData = () => {
		const { value, searchType } = this.state
		searchMusic({
			keywords: value,
			type: searchType
		}).then(res => {
			console.log(res.result)
			if (searchType === 1) {
        this.setState({ musicList: res.result.songs })
        const wrapper = document.querySelector('.y-search-wrapper')
        new BScroll(wrapper, {})
			} else {
        this.setState({ collectionList: res.result.songs })
        
			}
			this.setState({ showTabs: true })
		})
	}
	onChange = value => {
		this.setState({ value })
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
						<Tabs tabs={tabs} initialPage={0}>
							<div className='y-search-section'>
								<MusicList list={this.state.musicList}></MusicList>
							</div>
							<div className='y-search-section'>歌单=。=待更新</div>
						</Tabs>
					</div>
				</div>
			</div>
		)
	}
}
