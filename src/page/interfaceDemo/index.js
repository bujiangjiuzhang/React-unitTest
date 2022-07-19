import { useEffect, useState  } from 'react';
import { Button, Table } from 'antd';
import axios from 'axios';
import './index.css'

// 此文件用于测试接口模拟
 function InterfaceDemo() {
    // 获取接口数据
    let [list, setList] = useState({})


    useEffect(() => {
        getList()
    },[])
    
    const getList = async()=> {
        try {
            const response = await axios.get('http://localhost:5000/getList')
            if(response.status === 200) {
                setList(response.data)
            }
        } catch(err) {
            console.log(err);
        }
    }
    const getExcel = async()=> {
        window.location.href = 'http://localhost:5000/getExcel'
    }
      
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
    ];
    return (
        <div data-testid="interfaceDemo" className="interfaceDemo">
           <div className='interfaceTitle'>
               {list.title || ''}
           </div>
           <div>
               <Button data-testid="exportBtn" type='primary' onClick={getExcel}>导出</Button>
           </div>
           {list.data &&
                <div className='interfacenContent'>
                    <Table 
                        data-testid="showTable"
                        dataSource={list.data} 
                        columns={columns} 
                        rowKey={record => record.id}
                    />
                </div>
            }
        </div>
    );
}

export default InterfaceDemo;
