import I18next from '../page/i18next'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";

// I18next文件主要测试内容：
// 1.测试模拟i18next useTranslation国际化
// 2.测试内容的显示

//   useTranslation的模拟
jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: key => key })
}));

describe('I18next', () => {

  test('测试I18next', async()=> {
    render(
      <BrowserRouter>
        <I18next />
      </BrowserRouter>
    )
    // 测试内容的显示
    const i18nextContent = await screen.findByText('i18next.title')
    expect(i18nextContent).toBeInTheDocument()
    // screen.debug()
  })
})