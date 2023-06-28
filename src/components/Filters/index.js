import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import searchFilterChange from '../../redux/action/action2'
// import statusFilterChange from '../../redux/action/action3';
// import priorityChange from '../../redux/action/action4'
import filterSlice from './FilterSlice'
const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [priorities, setPriorities] = useState([])
  const dispatch = useDispatch()
  const handleChangeSearch = (e) => {
    setSearchText(e.target.value)
    dispatch(filterSlice.actions.searchFilterChange(e.target.value))
  }

  const handleStatusChange = (e) => {
    // console.log(e.target.value);
    setStatusFilter(e.target.value)
    dispatch(filterSlice.actions.statusFilterChange(e.target.value))
  }

  const handleChangePeiority = (value) => {
    setPriorities(value)
    dispatch(filterSlice.actions.priorityChange())
  }
  return (
    <Row justify='center'>
      <Col span={24} >
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleChangeSearch} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusFilter} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}

          value={priorities} onChange={handleChangePeiority}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
