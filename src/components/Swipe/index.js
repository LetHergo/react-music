// import React, { Component } from 'react';
// import { Carousel, WingBlank } from 'antd-mobile';
// import './index.scss'
// export default class index extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			swipeList: [
// 				'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1054624424,900468487&fm=26&gp=0.jpg',
// 				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584706522963&di=c58707be939e3700995aace9c99c7130&imgtype=0&src=http%3A%2F%2Fent.chinadaily.com.cn%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20141106%2Fd4bed9d5112315c5275803.jpg',
// 				'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1413881962,2562117448&fm=26&gp=0.jpg'
// 			],
// 			imgHeight: 176
// 		};
// 	}
// 	render() {
// 		return (
// 			<WingBlank>
// 				<Carousel
// 					autoplay={false}
//           infinite
// 					>
// 					{this.state.swipeList.map(val => (
// 						<img src={val} alt="" style={{ width: '100%', height:this.state.imgHeight,objectFit:'cover'}} key={val} />
// 					))}
// 				</Carousel>
// 			</WingBlank>
// 		);
// 	}
// }
