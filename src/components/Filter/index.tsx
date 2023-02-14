import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { ChangeEvent } from "react";
import { shallow } from "zustand/shallow";
import useEmployeeStore from "../../pages/Employee/store";
import { EmployeeFilter } from "../../pages/Employee/types";
import './index.scss';

const Filter = () => {
  const [form] = Form.useForm()

  const { filter, setFilter, fetchEmployee } = useEmployeeStore(
    (state) => ({
      fetchEmployee: state.fetchEmployee,
      filter: state.filter,
      setFilter: state.setFilter,
    }),
    shallow
  );

  const handleSubmit = async (values: EmployeeFilter) => {
    setFilter({...values, open: false, active: true})
    await fetchEmployee()
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target
    setFilter({[name]: value})
  }

  const handleOfficeChange = (value: any, value2: any) => {
    setFilter({office: value})
  }

  const handleDepartmentChange = (value: any, value2: any) => {
    setFilter({department: value})
  }

  const handleTypeChange = (value: any, value2: any) => {
    setFilter({type: value})
  }

  const handleStatusChange = (value: any, value2: any) => {
    setFilter({status: value})
  }

  // const handleFormChange = (changedValues: any, allValues: any) => {
  //   setFilter(changedValues)
  // }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: 336 }}
      onFinish={handleSubmit}
      // onValuesChange={handleFormChange}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
      
    >
      <Form.Item label="Từ khoá" valuePropName="value">
        <Input type="text" name="keyword" value={filter?.keyword} onChange={handleInputChange} placeholder="Tên, chức vụ, điện thoại,..." />
      </Form.Item>

      <Form.Item label="Văn phòng">
        <Select value={filter?.office} onChange={handleOfficeChange}>
          <Select.Option value="51">Luỹ Bán Bích</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Phòng ban">
        <Select value={filter?.department} onChange={handleDepartmentChange}>
          <Select.Option value="924">HEADQUATER</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="LHCV">
        <Select value={filter?.type} onChange={handleTypeChange}>
          <Select.Option value="0">Nhân viên chính thức</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Trạng thái">
        <Select value={filter?.status} onChange={handleStatusChange}>
          <Select.Option value="1">Có hiệu lực</Select.Option>
          <Select.Option value="3">Vô hiệu lực</Select.Option>
        </Select>
      </Form.Item>

      <Divider style={{marginBottom: 8, marginTop: 16}} />

      <Row>
        <Col span={8} style={{textAlign: 'right'}}>
          <Button type="link" onClick={() => setFilter({open: false})}>
            Đóng
          </Button>
        </Col>
        <Col span={16}>
          <Button style={{width: '100%'}} type="primary" htmlType="submit">
            Tìm kiếm
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
