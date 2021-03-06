import React from "react";
import { Button, Row, Col } from "antd";
import "./index.less"

const NotFound = (props) => {
	const { history } = props
	const goHome = () => history.replace("/")
	return(
		<Row className="not-found">
			<Col span={12}></Col>
			<Col span={12} className="right">
				<h1>404</h1>
				<h2>访问页面不存在</h2>
				<div>
					<Button type="primary" onClick={goHome}>
						返回首页
					</Button>
				</div>
			</Col>
		</Row>
	)
}
export default NotFound
