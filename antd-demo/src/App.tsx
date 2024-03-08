import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Table} from "antd";

function App() {
    const data = Array.from({length: 5}, (_,index)=>({
        key: index,
        day: 'table-issue' + index
    }))
    const columns:any = [
        {
            title: '元宵',
            dataIndex: 'day',
            width: 200,
        },
        {
            title: '三八',
            dataIndex: 'day',
            width: 200,
        },
        {
            title: '五一',
            dataIndex: 'day',
            width: 200,
        },
        {
            title: '六一',
            dataIndex: 'day',
            width: 200,
        },
        {
            title: '国庆',
            dataIndex: 'day',
            width: 200,
        },
        {
            title: '中秋',
            dataIndex: 'day',
            width: 200,
        },
        {
            title: '除夕',
            dataIndex: 'day',
            width: 200,
        },
        {
            title: '除夕',
            dataIndex: 'day',
            width: 200,
        },
        {
            title: '操作',
            width: 200,
            dataIndex: 'day',
            fixed: 'right',
            render: ()=>{
                return (
                    <a>详情</a>
                )
            }
        },
    ]
    // @ts-ignore
    return (
        <div style={{margin: '64px'}}>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{x: '100%', y: '300px'}}
            />
        </div>
    )
}

export default App;
