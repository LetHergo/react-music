import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Loading from '@/components/Loading'
import HomeHeader from '@/components/HomeHeader/homeHead'
const Home = lazy(() => import('@/views/Home/home.js'))
class App extends Component {
	render() {
		return (
			<Router>
				<div className='y-container'>
					<HomeHeader />
					<main className='y-main'>
						<Suspense fallback={<Loading />}>
							<Switch>
								<Route path='/home' component={Home} />
								<Redirect to='/home' />
							</Switch>
						</Suspense>
					</main>
				</div>

				{/* {this.props.showPlayer && <Player />} */}
			</Router>
		)
	}
}
//映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
	showPlayer: state.showPlayer
})
export default connect(mapStateToProps)(App)
