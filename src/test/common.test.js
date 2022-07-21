import { common } from '../common'

const { localStorageMock } = common

// 主要测试内容：
// 1.测试函数的使用

describe('common', () => {
    test('测试localStorageMock函数', () => {
       localStorageMock.setItem('currentData', "{'name':'jack','age': 23}")
       // 校验getItem
       expect(localStorageMock.getItem('currentData')).toEqual("{'name':'jack','age': 23}")
       // 验证getLength
       expect(localStorageMock.getLength('currentData')).toBe(1)
       // 验证key方法
       expect(localStorageMock.key(0)).toBe('currentData')
       // 执行清除操作再验证
       localStorageMock.removeItem('currentData')
       expect(localStorageMock.getItem('currentData')).toEqual(null)
       expect(localStorageMock.getLength('currentData')).toBe(0)
       expect(localStorageMock.key(0)).toBe(null)
    })
})