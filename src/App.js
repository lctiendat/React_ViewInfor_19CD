import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css'
import { Table } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';
import axios from 'axios';

class App extends React.Component {

  showInfor = async (code) => {
    const result = await axios.post('http://sinhvien.hueic.edu.vn/tra-cuu-van-bang.html', {
      MaSinhVien: code
    },
    he)
    console.log(result);
  }

  render() {

    const dataSource = [
      {
        key: '1',
        order: '1',
        studentCode: '1960267',
        name: 'LÊ HUỲNH BỬU',
        birthday: '28/08/2001',
      },
      {
        key: '2',
        order: '2',
        studentCode: '1960268',
        name: 'PHẠM VĂN DẦN',
        birthday: '21/04/1998',
      },
      {
        key: '3',
        order: '3',
        studentCode: '1960270',
        name: 'LÊ CÔNG TIẾN ĐẠT',
        birthday: '11/08/2000',
      },
      {
        key: '4',
        order: '4',
        studentCode: '1960271',
        name: 'TRẦN ANH ĐỨC',
        birthday: '25/12/2001',
      },
      {
        key: '5',
        order: '5',
        studentCode: '1960272',
        name: 'TRỊNH THỊ QUỲNH GIAO',
        birthday: '22/09/2000',
      },
      {
        key: '6',
        order: '6',
        studentCode: '1960474',
        name: 'TRẦN ĐỨC HIỂN',
        birthday: '28/02/1998',
      },
      {
        key: '7',
        order: '7',
        studentCode: '1960273',
        name: 'LÊ VĂN HOÀ ',
        birthday: '12/04/2001',
      },
      {
        key: '8',
        order: '8',
        studentCode: '1960274',
        name: 'PHẠM VĂN HOÀN',
        birthday: '02/05/2001',
      },
      {
        key: '9',
        order: '9',
        studentCode: '1960275',
        name: 'HẦU MẠNH HÙNG ',
        birthday: '20/09/2001',
      },
      {
        key: '10',
        order: '10',
        studentCode: '1960266',
        name: 'NGUYỄN ĐÌNH HƯNG ',
        birthday: '20/08/2001',
      },
      {
        key: '11',
        order: '11',
        studentCode: '1960011',
        name: 'LÊ THỊ HƯƠNG ',
        birthday: '11/10/2001',
      },
      {
        key: '12',
        order: '12',
        studentCode: '1960276',
        name: 'BÙI BẢO KIÊN',
        birthday: '15/08/1998',
      },
      {
        key: '13',
        order: '13',
        studentCode: '1960515',
        name: 'DƯƠNG LỘC',
        birthday: '26/09/2000',
      },
      {
        key: '14',
        order: '14',
        studentCode: '1960439',
        name: 'TRẦN NHƯ LƯƠNG',
        birthday: '25/04/2000',
      },
      {
        key: '15',
        order: '15',
        studentCode: '1960490',
        name: 'HOÀNG CÔNG MINH',
        birthday: '30/03/2000',
      },
      {
        key: '16',
        order: '16',
        studentCode: '1960485',
        name: 'NGUYỄN THÀNH NHẬT MINH ',
        birthday: '24/12/2000',
      },
      {
        key: '17',
        order: '17',
        studentCode: '1960382',
        name: 'HỒ MINH NHẬT',
        birthday: '18/01/1999',
      },
      {
        key: '18',
        order: '18',
        studentCode: '1960341',
        name: 'NGUYỄN ĐÌNH NHẬT ',
        birthday: '12/04/2000',
      },
      {
        key: '19',
        order: '19',
        studentCode: '1960278',
        name: 'VÕ THỊ BÌNH NHI',
        birthday: '20/10/2001',
      },
      {
        key: '20',
        order: '20',
        studentCode: '1960282',
        name: 'VÕ TRƯỜNG QUYỀN',
        birthday: '26/07/2001',
      },
      {
        key: '21',
        order: '21',
        studentCode: '1960283',
        name: 'PHẠM THANH SINH ',
        birthday: '21/12/2001',
      },
      {
        key: '22',
        order: '22',
        studentCode: '1960444',
        name: 'LÊ CÔNG SƠN',
        birthday: '22/08/1997',
      },
      {
        key: '23',
        order: '23',
        studentCode: '1960424',
        name: 'HOÀNG MINH THÀNH',
        birthday: '07/04/1996',
      },
      {
        key: '24',
        order: '24',
        studentCode: '1960516',
        name: 'NGUYỄN QUANG TRÃI ',
        birthday: '24/05/2001',
      },

    ];

    const columns = [
      {
        title: 'Order',
        dataIndex: 'order',
        key: 'order',
      },
      {
        title: 'Student Code',
        dataIndex: 'studentCode',
        key: 'studentCode',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
      },
      {
        title: 'Action',
        key: 'action',
        render: (item, value) => (
          <FullscreenOutlined onClick={() => {
            this.showInfor(value.studentCode)
          }} />
        )
      }
    ];

    return (
      <div className="App">
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    );
  }
}

export default App;
