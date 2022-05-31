**`注意：因为jest 是在node环境下运行的，node暂时没有实现ES6 module,Jest不支持ES6语法，所以不能使用import导入文件，需要引入babel。另外Jest识别三种测试文件，以.test.js结尾的文件，以.spec.js结尾的文件，和放到__tests__ 文件夹中的文件。`**

### **安装**

```javascript
npx create-react-app my-app --typescript

npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```
### **添加jest**

```javascript
npm install --save-dev jest
```

### **修改配置**

package.json下面script修改成：
```javascript
"test":"jest",
"coverage":"jest --coverage"
```

### **文件定义**

自己在src下面新建放页面和放test的文件夹

### **添加babel**

```javascript
 yarn add @babel/core@7.4.5 @babel/preset-env@7.4.5 --dev
```

### **暴露webpack的配置**

```javascript
npm run eject
```

### **查看测试是否通过**

```javascript
npm run test
```

### **查看项目的测试覆盖率**

```javascript
npm run coverage
```

