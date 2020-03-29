import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Loading from '@/components/Loading'
import Player from '@/views/Player/player.js'
const Index = lazy(() => import('@/views/Index/index.js'))
const Search = lazy(() => import('@/views/Search/search.js'))
class App extends Component {
	render() {
		return (
			<Router>
				<div className='y-container-wrapper'>
					<div className='y-container'>
						<Suspense fallback={<Loading />}>
							<Switch>
								<Route exact path='/' component={Index} />
								<Route path='/search' component={Search} />
								{/* <Redirect to='/' /> */}
							</Switch>
						</Suspense>
					</div>
					<Player />
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
