import React, { Component, lazy } from 'react'
import { connect } from 'react-redux'
import HomeHeader from '@/components/HomeHeader/homeHead'
import './index.scss'
const Home = lazy(() => import('@/views/Home/home.js'))
class App extends Component {
	render() {
		return (
			<div className='y-index'>
				<HomeHeader />
				<main className='y-main'>
					<Home></Home>
				</main>
			</div>
		)
	}
}
//映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
	showPlayer: state.showPlayer
})
export default connect(mapStateToProps)(App)
