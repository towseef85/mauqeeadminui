import React from 'react'
import {Pagination} from 'antd';

export default function AppPagination({count, page, onChange, pageSize, className}) {
  return (
    <Pagination
    component='div'
    total={count}
    pageSize={pageSize}
    className={className}
    page={page}
    backIconButtonProps={{'aria-label': 'Previous Page'}}
    nextIconButtonProps={{'aria-label': 'Next Page'}}
    onChange={onChange}
    rowsPerPageOptions={[]}
  />
  )
}
