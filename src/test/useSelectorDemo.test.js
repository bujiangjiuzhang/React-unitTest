import UseSelectorDemo from '../page/UseSelectorDemo'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import * as Redux from 'react-redux'
import { StoreWrapper } from '../storeWrapper'

// useSelectorDemo文件主要测试内容：
// 1.测试useSelector获取reducer中store对象的数据
// 2.测试内容的显示


// 模拟路由useNavigate
// mock路由
// jest.mock('react-router-dom', () => {
//   const originalModule = jest.requireActual('react-router-dom')
//   return {
//     __esModule: true,
//     ...originalModule,
//     useNavigate: jest.fn()
//   }
// })

// 或者
// const mockDispatch = jest.fn();
// const mockSelector = jest.fn();

// jest.mock("react-redux", () => ({
//  ...jest.requireActual("react-redux"),
//  useDispatch: () => mockDispatch,
//  useSelector: () => mockSelector,
// }));

describe('UseSelectorDemo', () => {

  test('测试UseSelectorDemo', async () => {
    // 模拟useSelector获取reducer中store对象的数据
    const spy = jest.spyOn(Redux, 'useSelector')

    spy.mockReturnValue({
      title: '测试修改title'
    })
    render(
      <StoreWrapper>
        <BrowserRouter>
          <UseSelectorDemo />
        </BrowserRouter>
      </StoreWrapper>
    )
    // 测试内容的显示
    const testTitle = await screen.findByText('测试修改title')
    expect(testTitle).toBeInTheDocument()

    // screen.debug()
  })
})