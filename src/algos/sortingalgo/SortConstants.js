

export const TableSyntax = [
  {
    title: 'S.no',
    fixed: 'left',
    width: 60,
    render: (item, data, idx) => <>{idx + 1}</>,
  },
  {
    title: 'sort',
    dataIndex: 'sort',
    width: 150,
  },
  {
    title: 'arrResult',
    dataIndex: 'arrResult',
    render: (val, data, index) => (
      <div className='w-32 overflow-x-scroll whitespace-nowrap' key={index}>
        {val.map((item, idx) =>
          idx === val.length - 1 ? (
            <span key={idx}>{item}</span>
          ) : (
            <span key={idx}>{item},</span>
          )
        )}
      </div>
    ),
  },

  {
    title: 'arrUsed',
    dataIndex: 'arrUsed',
    // width: 100,
    render: (val, data, index) => (
      <div className='w-32 overflow-x-scroll whitespace-nowrap' key={index}>
        {val.map((item, idx) =>
          idx === val.length - 1 ? (
            <span key={idx}>{item}</span>
          ) : (
            <span key={idx}>{item},</span>
          )
        )}
      </div>
    ),
  },

  {
    title: 'comparison',
    dataIndex: 'comparison',
    // width: 50,
  },
  {
    title: 'swap',
    dataIndex: 'swap',
    // width: 50,
  },
  {
    title: 'visualise time',
    dataIndex: 'vis',
    width: 90,
    fixed: 'right',
    render: (val) => {
      return <>{(val / 1000).toFixed(2)}s</>
    },
  },
]
