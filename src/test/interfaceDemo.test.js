import InterfaceDemo from '../page/interfaceDemo'
import { render, screen, within, act } from '@testing-library/react'
// import { act } from '@testing-library/react-hooks'
import { userEvent } from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import Axios from 'axios'
var MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(Axios, { onNoMatch: "throwException" });

// 主要测试内容：
// 1.测试模拟接口请求
// 2.测试内容的显示

describe('InterfaceDemo', () => {
    beforeAll(() => {
        mock.onAny('http://localhost:5000/getList').reply(200, { "title": "请求接口返回数据", "name": "getList", "data": [{ "id": 1, "name": "zhangsan", "age": 10, "address": "湖北省武汉市XXX" }, { "id": 2, "name": "lisi", "age": 12, "address": "湖北省荆门市XXX" }, { "id": 3, "name": "wanger", "age": 32, "address": "湖北省黄冈市XXX" }, { "id": 4, "name": "liuji", "age": 22, "address": "湖北省武汉市XXX" }, { "id": 5, "name": "hebin", "age": 43, "address": "湖北省天门市XXX" }, { "id": 6, "name": "wuhang", "age": 23, "address": "湖北省武汉市XXX" }, { "id": 7, "name": "duhu", "age": 66, "address": "湖北省鄂州市XXX" }] })
    });

    afterAll(() => {
        mock.restore();
    });

    beforeEach(() => {
        mock.resetHistory();
    });
    test('测试InterfaceDemo', async () => {
        render(
            <BrowserRouter>
                <InterfaceDemo />
            </BrowserRouter>
        )
        // 通过id测试内容显示
        const interfaceDemo = await screen.findByTestId('interfaceDemo')
        expect(interfaceDemo).toBeInTheDocument()
        // 获取文字内容测试内容显示
        const showTitle = await screen.findByText('请求接口返回数据')
        expect(showTitle).toBeInTheDocument()
        const showGetList = await screen.findByText('getList')
        expect(showGetList).toBeInTheDocument()
        // 测试表格内容的显示
        const showTable = await screen.findByTestId('showTable')
        expect(showTable).toBeInTheDocument()
        const zhangsan = await within(showTable).findByText('zhangsan')
        expect(zhangsan).toBeInTheDocument()
        // screen.debug()
    })

    test('测试导出功能', async() => {
        render(
            <BrowserRouter>
                <InterfaceDemo />
            </BrowserRouter>
        )


        // 通过id测试内容显示
        const interfaceDemo = await screen.findByTestId('interfaceDemo')
        expect(interfaceDemo).toBeInTheDocument()
        // 获取导出按钮
        const exportBtn = await within(interfaceDemo).findByTestId('exportBtn')
        // console.log('exportBtn', exportBtn)
        expect(exportBtn).toBeInTheDocument()
        await act( () => {
            userEvent.click(exportBtn)
            // screen.debug()
        })
    });

})