import React, { memo } from 'react'
import Scroll from './scroll.js'

const App = memo(() => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const dataSource = [];

  for (let i = 0; i < 12; i++) {
    dataSource.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <Scroll columns={columns} dataSource={dataSource} scroll={{ y: 200 }} />
  )
})

export default App