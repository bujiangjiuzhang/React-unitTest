import InterfaceDemo from '../page/interfaceDemo'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Axios from 'axios'
var MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(Axios, { onNoMatch: "throwException" });

// 主要测试内容：
// 1.测试模拟接口请求
// 2.测试内容的显示

describe('InterfaceDemo', () => {
    beforeAll(() => {
        mock.onAny('http://localhost:5000/getList').reply(200, { 
            "title": "请求接口返回数据", 
            "name": "getList", 
            "data": [{ "id": 1, "name": "zhangsan", "age": 10, "address": "湖北省武汉市XXX" }]})
    });

    afterAll(() => {
        mock.restore();
    });

    beforeEach(() => {
        mock.resetHistory();
    });
    test('测试InterfaceDemo', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(() => {
            render(
                <InterfaceDemo />
            )
        })
        // 通过id测试内容显示
        const interfaceDemo = await screen.findByTestId('interfaceDemo')
        expect(interfaceDemo).toBeInTheDocument()
        // 获取文字内容测试内容显示
        const showTitle = await screen.findByText('请求接口返回数据')
        expect(showTitle).toBeInTheDocument()
        // 测试表格内容的显示
        const showTable = await screen.findByTestId('showTable')
        expect(showTable).toBeInTheDocument()
        const zhangsan = await within(showTable).findByText('zhangsan')
        expect(zhangsan).toBeInTheDocument()
        const address = await within(showTable).findByText('湖北省武汉市XXX')
        expect(address).toBeInTheDocument()
        // 获取导出按钮
        const exportBtn = await within(interfaceDemo).findByTestId('exportBtn')
        expect(exportBtn).toBeInTheDocument()
        userEvent.click(exportBtn)
        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug()
    })

})