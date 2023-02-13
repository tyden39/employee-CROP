import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { useEffect } from "react";
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

  const handleFormChange = (changeValues: EmployeeFilter, allValues: EmployeeFilter) => {
    setFilter(changeValues)
  }

  useEffect(() => {
    if(filter?.clearFilter) {
      form.resetFields()
      setFilter({clearFilter: false, keyword: '', office: '', department: '', type: '', status: ''})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter?.clearFilter])

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: 336 }}
      onFinish={handleSubmit}
      onValuesChange={handleFormChange}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
      
    >
      <Form.Item label="Từ khoá" name="keyword" valuePropName="value">
        <Input type="text" value={filter?.keyword} placeholder="Tên, chức vụ, điện thoại,..." />
      </Form.Item>

      <Form.Item label="Văn phòng" name="office">
        <Select value={filter?.office}>
          <Select.Option value="51">Luỹ Bán Bích</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Phòng ban" name="department">
        <Select value={filter?.department}>
          <Select.Option value="924">HEADQUATER</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="LHCV" name="type">
        <Select value={filter?.type}>
          <Select.Option value="0">Nhân viên chính thức</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Trạng thái" name="status">
        <Select value={filter?.status}>
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
