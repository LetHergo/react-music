import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Loading from '@comp/Loading'
import HomeHeader from '@comp/HomeHeader'
const Home = lazy(() => import('@views/Home'))
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			//是否打开抽屉
			showDrawer: false
		}
	}
	openDrawer = state => {
		this.setState({
			showDrawer: state
		})
	}
	render() {
		return (
			<Router>
				<HomeHeader onOpen={this.openDrawer} />
				<main className='y-main'>
					<Suspense fallback={<Loading />}>
						<Switch>
							<Route path='/home' component={Home} />
							<Redirect to='/home' />
						</Switch>
					</Suspense>
				</main>
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
