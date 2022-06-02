**`Jest识别三种测试文件，以.test.js结尾的文件，以.spec.js结尾的文件，和放到__tests__ 文件夹中的文件。`**

### **安装**

```javascript
git clone https://github.com/bujiangjiuzhang/React-unitTest.git
```

```javascript
npm install
```

### **运行**

```javascript
npm run start
```

### **查看测试是否通过**

```javascript
npm run test
```

### **查看项目的测试覆盖率**

```javascript
npm run coverage
```

## **文件说明：**
### 主要页面位于src/page下，对应的测试文件位于src/test下

#### 1.home.test.js主要用于测试useNavigate

#### 2.location.test.js主要用于测试useLocation

#### 3.i18next.test.js主要用于测试i18next国际化

#### 4.sessionStorage.test.js主要用于模拟sessionStorage存储数据的

#### 5.useSelectorDemo.test.js主要用于useSelector的模拟测试
#### 6.interfaceDemo.test.js主要用于接口请求模拟测试
+ 此项目下新建了一个node服务为该前端项目提供了一个简易接口（位于根目录的nodeDemo文件夹中）
运行服务步骤：cd nodeDemo然后执行npm start即可启动服务（http://localhost:5000/）
此时interfaceDemo.js文件就可以获取http://localhost:5000/的接口数据

        

