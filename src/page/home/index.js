import { useNavigate } from 'react-router'
// import { useTranslation } from 'react-i18next';
import './index.css'

function Home() {
	// const { t } = useTranslation();
	const redirect = useNavigate()

	const homeList = [
		{ title: '测试模拟useLocation', path: '/location', content: '跳转路由去测试模拟useLocation'},
		{ title: '测试模拟i18next', path: '/i18next', content: '跳转路由去测试模拟i18next'},
		{ title: '测试模拟sessionStorage', path: '/sessionStorage', content: '跳转路由去测试模拟sessionStorage'},
		{ title: '测试模拟useSelector', path: '/useSelector', content: '跳转路由去测试模拟useSelector'},
		{ title: '测试模拟请求接口返回数据', path: '/interfaceDemo', content: '跳转路由去测试接口'}
	]

	sessionStorage.setItem('newStroge', JSON.stringify({ title: '测试sessionStorage存储过程' }))

	const toLocation = (path, params) => {
		redirect(path, {
			state: params
		})
	}

	return (
		<div className="home">
			<div className='homeTitle'>
				首页
			</div>
			{homeList.map(item => {
				return (<div
					key={item.path}
					data-testid='homeList'
					className='homeList'
					onClick={() => toLocation(item.path,
						{ title: item.title })}
				>
					{item.content}
				</div>)
			})}
		</div>
	);
}

export default Home;
