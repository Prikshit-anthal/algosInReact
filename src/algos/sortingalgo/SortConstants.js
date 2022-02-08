import { render } from "@testing-library/react"

var data=''
export const TableSyntax = [
  {
    title:'S.no',
    fixed:'left',
    width:75,
    render:(item,data,idx)=>(<>{idx}</>)
  },
  {
    title: 'sort',
    dataIndex: 'sort',
    key: 'key',
    // width: 150,

  },
  {
    title: 'arrResult',
    dataIndex: 'arrResult',
    key: 'key',
    // width: 100,
    render: (val) => (
      <div className='w-32 overflow-x-scroll whitespace-nowrap'>
        {val.map((item, idx) =>
          idx === val.length - 1 ? <>{item}</> : <>{item},</>
        )}
      </div>
    ),
  },

  {
    title: 'arrUsed',
    dataIndex: 'arrUsed',
    key: 'key',
    // width: 100,
    render: (val) => (
      <div className='w-32 overflow-x-scroll whitespace-nowrap'>
        {val.map((item, idx) =>
          idx === val.length - 1 ? <>{item}</> : <>{item},</>
        )}
      </div>
    ),
  },

  {
    title: 'comparison',
    dataIndex: 'comparison',
    key: 'key',
    // width: 50,
  },
  {
    title: 'swap',
    dataIndex: 'swap',
    key: 'key',
    // width: 50,
  },
  {
    title: 'visualise time',
    dataIndex: 'vis',
    key: 'key',
    width: 100,
    fixed: 'right',
    render: (val) => {
      return <>{(val / 1000).toFixed(2)}s</>
    },
  },

]
