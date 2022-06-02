import SessionStorage from '../page/sessionStorage'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import { common } from '../common'

// Location文件主要测试内容：
// 1.测试sessionStorage存储数据
// 2.测试内容的显示

describe('SessionStorage', () => {

  test('测试SessionStorage', async()=> {
    // 测试sessionStorage存储数据
    Object.defineProperty(window, 'sessionStorage', { value: common.localStorageMock });
    sessionStorage.setItem('newStroge', JSON.stringify({ title: '测试sessionStorage存储过程' }))

    render(
      <BrowserRouter>
        <SessionStorage />
      </BrowserRouter>
    )
    // 测试内容的显示
    const SessionStorageContent = await screen.findByText('测试sessionStorage存储过程')
    expect(SessionStorageContent).toBeInTheDocument()
    // screen.debug()
  })
})