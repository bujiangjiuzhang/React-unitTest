**`注意：因为jest 是在node环境下运行的，node暂时没有实现ES6 module,Jest不支持ES6语法，所以不能使用import导入文件，需要引入babel。另外Jest识别三种测试文件，以.test.js结尾的文件，以.spec.js结尾的文件，和放到__tests__ 文件夹中的文件。`**

### **安装**

```javascript
git clone https://github.com/bujiangjiuzhang/React-unitTest.git
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

<!-- 文件说明： -->
主要页面位于src/page下，对应的测试文件位于src/test下

1.home.test.js主要用于测试useNavigate

2.location.test.js主要用于测试useLocation

3.i18next.test.js主要用于测试i18next国际化


