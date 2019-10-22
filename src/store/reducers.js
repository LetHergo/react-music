import { combineReducers } from 'redux'
import * as ActionTypes from './actionTypes'

// 初始数据
const initialState = {
	playList: [], //播放列表
	showPlayer: false //播放器显示
}

// 是否显示Player组件
function showPlayer(showPlayer = initialState.showPlayer, action) {
	switch (action.type) {
		case ActionTypes.SHOW_PLAYER:
			return action.showPlayer
		default:
			return showPlayer
	}
}

const reducer = combineReducers({
	showPlayer
})

export default reducer
