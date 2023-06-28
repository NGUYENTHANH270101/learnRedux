import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import addTodo from '../../redux/action/actions'
import todoSlice from './TodoSlice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
// import todoSelector from '../../redux/selector'
// import searchTextSelector from '../../redux/selector2'
import todoRemainingSelector from '../../redux/selector'
export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('medium')
  const todoList = useSelector(todoRemainingSelector)
  // const searchText = useSelector(searchTextSelector)
  // console.log({ todoList });
  const dispatch = useDispatch()
  const handleCLick = () => {
    dispatch(todoSlice.actions.addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
    }))
    setTodoName('')
    setPriority('medium')
  }

  const handelInputChange = (e) => {
    setTodoName(e.target.value)
  }
  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />)}

      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handelInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
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
          <Button type='primary' onClick={handleCLick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
