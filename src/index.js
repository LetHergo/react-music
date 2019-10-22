import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import 'amfe-flexible'

window.mmPlayer = `摸鱼听歌
作者：易只照彦
歌曲来源于网易云音乐 (http://music.163.com)`
console.info(`%c${window.mmPlayer}`, `color:#fff`)
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
