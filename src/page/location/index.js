import { useLocation } from 'react-router'
import './index.css'

// 此文件用于测试路由跳转参数接收的模拟

function Location() {
	// 获取路由跳转接收参数
	const location = useLocation()
	const { title } = location.state

	return (
		<div className="location">
			{title}
		</div>
	);
}

export default Location;