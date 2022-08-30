import React, { memo,useEffect, useState,useRef } from 'react'
import { Table } from 'antd';

const Scroll = memo((props) => {
  const { dataSource, rollTime = 100, rollNum = 10, rollTop = 1.5, flag = true } = props;
  const [timer, setTimer] = useState(); // 定时器
  const TableContainer = useRef();
  useEffect(() => {
    InitialScroll(dataSource);
    return () => {
      clearInterval(timer);
    };
  }, []); // 检测数组内变量 如果为空 则监控全局

  let container = React.createRef();

  // 开启定时器
  const InitialScroll = (data) => {
    let container = TableContainer.current;
    container = container.getElementsByClassName('ant-table-body')[0];
    if (data.length > Number(rollNum) && flag) {
      // 只有当大于10条数据的时候 才会看起滚动
      let time = setInterval(() => {
        container.scrollTop += Number(rollTop);
        if (
          Math.ceil(container.scrollTop) >= Number(container.scrollHeight - container.clientHeight)
        ) {
          container.scrollTop = 0;
          // setTimeout(() => { container.scrollTop = 0 }, 1000)
        }
      }, Number(rollTime));
      setTimer(time); // 定时器保存变量 利于停止
    }
  };
  return (
    <div
      onMouseOver={() => {
        clearInterval(timer);
      }}
      onMouseOut={() => {
        InitialScroll(dataSource);
      }}
    >
      <Table
        ref={TableContainer}
        pagination={false}
        scroll={{
          y: 500,
          x: '100%',
          scrollToFirstRowOnChange: true,
        }}
        {...props}
      />
    </div>
  );
})

export default Scroll