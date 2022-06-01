import Location from '../page/location'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import * as RouterDom from 'react-router'

// Location文件主要测试内容：
// 1.测试模拟useLocation
// 2.测试内容的显示

describe('Location', () => {

  test('测试Location', async()=> {
    // 测试模拟useLocation
    const spy = jest.spyOn(RouterDom, "useLocation")
    spy.mockReturnValue({
      key: "zfn2yuj8",
      search:'',
      hash:'',
      pathname: '/location',
      state: {title: '测试模拟useLocation'}
    });
    render(
      <BrowserRouter>
        <Location />
      </BrowserRouter>
    )
    // 测试内容的显示
    const locationContent = await screen.findByText('测试模拟useLocation')
    expect(locationContent).toBeInTheDocument()
    // screen.debug()
  })
})