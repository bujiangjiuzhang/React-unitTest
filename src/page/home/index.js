import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next';
import './index.css'

function Home() {
	const { t } = useTranslation();
	const redirect = useNavigate()

	const toLocation = () => {
		redirect('/location', {
			state: {
				title: '路由跳转'
			}
		})
	}

	return (
		<div className="home">
			<div className='homeTitle'>
				{t('home.title')}
			</div>
			<div
				className='homeList'
				onClick={() => toLocation('/location',
					{ title: '测试模拟useLocation' })}
			>
				跳转路由去测试模拟useLocation
			</div>
			<div
				className='homeList'
				onClick={() => toLocation('/i18next',
					{ title: '测试模拟i18next' })}
			>
				跳转路由去测试模拟i18next
			</div>
		</div>
	);
}

export default Home;
