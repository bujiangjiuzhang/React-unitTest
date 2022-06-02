import { useSelector } from 'react-redux'

function UseSelectorDemo() {
	const {
		title
	  } = useSelector((state) => {
		return state.testReducer
	  })
	console.log('title', title)
	return (
		<div className="useSelector">
			{ title }
		</div>
	);
}

export default UseSelectorDemo;
