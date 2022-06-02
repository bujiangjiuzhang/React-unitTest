import { Provider } from 'react-redux'
import Store from './store'

export const StoreWrapper = ({ children }) => (
  // you could just use your normal Redux store or create one just for the test
  <Provider store={Store}>{children}</Provider>
)
export default StoreWrapper
