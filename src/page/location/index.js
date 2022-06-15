// import { Button } from 'antd';
import { useEffect, useState } from 'react'
import { Space , Input , Button , notification } from 'antd'
import { useLocation } from 'react-router'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import { xmlStr } from '../../mock/xmlStr' // 这里是直接引用了xml字符串
import activitiDescriptor from './activiti.json'
import './index.css'

// 此文件用于测试路由跳转参数接收的模拟

function Location() {
	// 获取路由跳转接收参数
	const location = useLocation()
	const { title } = location.state

	const [bpmnModeler, setBpmnModeler] = useState()

	// const canvas = useRef(null)

	useEffect(()=> {
		// 建模
		setBpmnModeler(new BpmnModeler({
			container: '#canvas',
			height: '96.5vh',
			moddleExtensions: {
			  activiti: activitiDescriptor
			},
		  })
		)
	},[])

	 // 导入xml
	useEffect(() => {
		(async () => {
			// 读取默认xml
		  await createBpmnDiagram(xmlStr);
		// 创建空白流程图
		// bpmnModeler?.createDiagram();
		//   监听面板变化，有变化立即更新到xml中
		  initPropertiesPanel();
		})();
	  });

	const createBpmnDiagram = (xmlString)=> {
		try {
		  bpmnModeler?.importXML(xmlString);
		} catch (e) {
		  console.error(e);
		}
	}

	function initPropertiesPanel() {
		bpmnModeler?.on('selection.changed', e => {
		  // 如果是第一个节点，则oldSelection有，newSelection没有
		  let selection = e.newSelection;
		  if (!e.newSelection.length && e.oldSelection.length) {
			selection = e.oldSelection;
		  }
		  confirmCurrentElement(selection[0] || null);
		 })
	}

	function confirmCurrentElement(element) {
		console.log('当前选中的元素为2: \n', element?.businessObject);
		
	}

	// 导入 xml 文件
	const handleOpenFile = (e) => {
		if (e.target.files.length > 0) {
		  const files = e.target.files[0];
		  const reader = new FileReader();
		  let data = '';
		  reader.readAsText(files);
		  reader.onload = function(event) {
			data = event?.target?.result;
			renderDiagram(data);
		  };
		}
	  };
	
	// 渲染 xml 格式
	const renderDiagram = (xml) => {
	  bpmnModeler.importXML(xml, (err) => {
		if (err) {
		  console.log(err);
		  console.log(xml);
		  notification.error({
			message: '提示',
			description: '导入失败',
		  });
		}
	  });
	};

	const download = async()=> {
		let result = await bpmnModeler.saveXML({ format: true });
		const { xml } = result;
		const a = document.createElement('a');
	
		const name = 'diagram.xml'
	
		a.setAttribute('href', `data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(xml)}`);
		a.setAttribute('target', '_blank');
		a.setAttribute('dataTrack', `diagram:download-bpmn`);
		a.setAttribute('download', name);
	
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	  }

	function renderToolBar() {
		return (
		  <>
			<Space
			  direction={'horizontal'}
			  size={1}
			  style={{ marginTop: 3, marginBottom: 3 }}
			>
			  <Input
				  type="file"
				  onChange={handleOpenFile}
			  />
			  <Button
				type="primary"
				size={'small'}
				onClick={download}
			  >
				{'下载'}
			  </Button>
			</Space>
		  </>
		);
	}

	console.log('bpmnModeler.getModules()',bpmnModeler)
	const ElementRegistry = bpmnModeler?.get("elementRegistry")
	console.log(ElementRegistry?.get('process'))
	return (
		<div className="location">
			<p>{title}</p>
			{renderToolBar()}
			<div className="containers">
			<div
				id="canvas"
				style={{
					backgroundColor: '#fff',
					backgroundImage:
					'linear-gradient(rgba(24,144,255, .5) 1px, transparent 0), linear-gradient(90deg,rgba(24,144,255, .5) 1px, transparent 0)',
					backgroundSize: '20px 20px',
				}}
			/>
			</div>
		</div>
	);
}

export default Location;
