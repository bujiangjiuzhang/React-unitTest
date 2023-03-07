import Home from '../page/home'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

// home文件主要测试内容：
// 1.测试模拟useNavigate
// 2.测试内容的显示
// 3.测试点击事件

// 测试模拟useNavigate
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => jest.fn()
}))

describe('Home', () => {
  const history = createMemoryHistory();
  test('测试home', async()=> {
    render(
      <BrowserRouter>
        <Home history={history} />
      </BrowserRouter>
    )
    // 测试内容的显示
    const homeTitle = await screen.findByText('首页')
    expect(homeTitle).toBeInTheDocument()

    const homeList = await screen.findAllByTestId('homeList')
    expect(homeList).toHaveLength(5)

    // 测试点击事件
    userEvent.click(homeList[0])
  })
})