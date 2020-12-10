

// import React from "react"
// import DashBoardTabel from "../Tabel/Tabel"

// class Orders extends React.PureComponent {

//     constructor(props) {
//         super(props)
//         this.state = {

//             columns: [
//                 {
//                     Header: "Orders",
//                     columns: [

//                         {
//                             Header: "Name",
//                             accessor: "name"
//                         },
//                         {
//                             Header: "City",
//                             accessor: "city"

//                         },
//                         {
//                             Header: "State",
//                             accessor: "state"


//                         },
//                         {
//                             Header: "Address",
//                             accessor: "address"

//                         }
//                         ,
//                         {
//                             Header: "Zip",
//                             accessor: "zip"

//                         }
//                         ,
//                         {
//                             Header: "Product",
//                             accessor: "productDetail"

//                         },
//                         {
//                             Header: "Qaunity",
//                             accessor: "qaunity"
//                         }
//                     ]
//                 }
//             ]
//         }
//     }

//     render() {
//         console.log('#####',this.state.data)
//         return (

//             <DashBoardTabel columns={this.state.columns} data={this.props.orders} header="Orders" />

//         )

//     }

// }

// export default Orders
import Backend from '../../services/BackendClient'
import React from "react"
import DashBoardTabel from "../Tabel/Tabel"
import { Table, Tag, Space, Modal, Button } from 'antd';
import 'antd/dist/antd.css';

class Orders extends React.PureComponent {

    constructor(props) {
        super(props)
      
        
         this.state = {
        columns: [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'City',
              dataIndex: 'city',
              key: 'city',
            },
            {
              title: 'State',
              dataIndex: 'state',
              key: 'state',
            },
            {
                title: 'Zip',
                dataIndex: 'zip',
                key: 'zip',
              },
              {
                title: 'Product',
                dataIndex: 'productDetail',
                key: 'productDetail',
              },
              {
                title: 'Qaunity',
                dataIndex: 'qaunity',
                key: 'qaunity',
              },
              {
                title: 'Order Id',
                dataIndex: 'id',
                key: 'id',
              },
              {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                  <Space size="middle">
                    <a onClick={this.handleClick.bind(this, record.id)}>Fufill Order</a>
                    <Modal
          title="Title"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
              <p>Hey</p>
        </Modal>
                    
                  </Space>
                ),
              },
          ]
    }
}



state = {
  ModalText: 'Content of the modal',
  visible: false,
  confirmLoading: false,
  orderId: ''
};

showModal = () => {
  this.setState({
    visible: true,
  });
};

 handleOk = async() => {
  this.setState({
    ModalText: 'The modal will be closed after two seconds',
    confirmLoading: true,
  });
  const response = await Backend.fufillOrder('OrJQPF16xbOVBe3L66FqUhJ8HIa2', this.state.orderId).then(val =>{
    console.log(response)
    this.setState({
      visible: false,
      confirmLoading: false,
    });
  })
    
  // setTimeout(() => {
  //   this.setState({
  //     visible: false,
  //     confirmLoading: false,
  //   });
  // }, 2000);
};

handleCancel = () => {
  console.log('Clicked cancel button');
  this.setState({
    visible: false,
  });
};










handleClick(item) {
   this.state.orderId = item
  this.showModal()
  console.log(item); // it will be log 1 item when you click

}
    render() {
        console.log('#####',this.state.data)
        return (
          <div>
            <Table columns={this.state.columns} dataSource={this.props.orders} header="Orders" />
            {/* <Modal
          title="Title"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
              <p>Hey</p>
        </Modal> */}
            </div>
        )

    }

}

export default Orders