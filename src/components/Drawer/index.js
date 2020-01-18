import React from 'react'
import classnames from 'classnames'

import './drawer.scss'

const Drawer = props => {
	const { showDrawer, sidebar, children } = props
	const closeDrawer = () => {
		props.openFlag(!showDrawer)
	}
	return (
		<div className={classnames('drawer', { 'drawer-open': showDrawer })}>
			<div className='drawer-content'>{children}</div>
			<div className='drawer-sidebar' onClick={closeDrawer}>
				{sidebar}
			</div>
			<div className='drawer-overlay' onClick={closeDrawer} />
		</div>
	)
}

export default Drawer
