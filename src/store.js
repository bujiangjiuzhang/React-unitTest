import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { testReducer } from './testReducer';

// 整合store
const rootReducer = combineReducers({
  testReducer: testReducer.reducer,
})
const store = configureStore({
  reducer: rootReducer,
  // 可以添加自己的中间件,比如打印日志的
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true,
});

export default store;
