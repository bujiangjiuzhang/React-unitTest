import './index.css'

function SessionStorage() {
	const data = sessionStorage.getItem('newStroge')
	return (
		<div className="sessionStorage">
			<div className='homeTitle'>
				{ data ? JSON.parse(data).title : '' }
			</div>
		</div>
	);
}

export default SessionStorage;
