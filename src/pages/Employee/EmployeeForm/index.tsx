import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { useParams } from "react-router-dom";
import ContentHeader from "../../../components/ContentHeader";
import "./index.scss";

interface EmployeeFormProps {
  type: "add" | "edit";
}

const EmployeeForm = ({ type }: EmployeeFormProps) => {
  const { employeeId } = useParams();
  console.log(employeeId)

  const [form] = Form.useForm();

  const title = type === 'add' ? 'Thêm nhân viên mới' : 'Cập nhật thông tin nhân viên'

  return (
    <div className="employee-edit__container">
      <ContentHeader title={title} breakcrum="Nhân viên" />

      <Form
        layout={"vertical"}
        form={form}
        // onValuesChange={onFormLayoutChange}
        autoComplete="off"
      >
        <Row style={{ height: "calc(100vh - 154.26px)" }}>
          <Col span={18} className="employee-content-left">
            <Row
              className="form-group"
              style={{ backgroundColor: "rgba(236,253,245,1)" }}
            >
              <Col span={8}>
                <h5>Thông tin đăng nhập</h5>
                <p>Tài khoản để nhân viên đăng nhập</p>
              </Col>
              <Col span={16}>
                <Row className="non-margin-left" gutter={16}>
                  <Col span={12} className="form-item">
                    <Form.Item
                      label="Email"
                      name={"email"}
                      rules={[
                        { required: true, message: "Bạn chưa nhập email" },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col span={12} className="form-item">
                    <Form.Item name={"password"} label="Mật khẩu đăng nhập">
                      {type === "add" ? (
                        <Input.Password
                          size="large"
                          placeholder="Để ô trống thì sẽ đượng tạo tự động..."
                        />
                      ) : (
                        <Button size="large" danger>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: 8 }}
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                          </svg>
                          Cài đặt lại mật khẩu
                        </Button>
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="form-group non-border">
              <Col span={8}>
                <h5>Thông tin liên hệ</h5>
                <p>Các thông tin cá nhân</p>
              </Col>
              <Col span={16}>
                <Row className="non-margin-left" gutter={16}>
                  <Col span={12} className="form-item">
                    <Form.Item
                      label="Họ và tên"
                      name={"name"}
                      rules={[
                        { required: true, message: "Bạn chưa nhập họ và tên" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} className="form-item">
                    <Form.Item
                      name={"gender"}
                      label="Giới tính"
                      rules={[
                        { required: true, message: "Bạn chưa chọn giới tính" },
                      ]}
                    >
                      <Select>
                        <Select.Option value="0">--</Select.Option>
                        <Select.Option value="1">Nam</Select.Option>
                        <Select.Option value="2">Nữ</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row className="non-margin-left" gutter={16}>
                  <Col span={12} className="form-item">
                    <Form.Item
                      label="Điện thoại"
                      name={"phone"}
                      rules={[
                        {
                          required: true,
                          message: "Bạn chưa nhập số điện thoại",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} className="form-item">
                    <Form.Item name={"employeeId"} label="Mã nhân viên">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Divider className="employee-form-divider" />

            <Row className="form-group">
              <Col span={8}>
                <h5>Thông tin nhân viên</h5>
                <p>Các thông tin liên quan đến công việc</p>
              </Col>
              <Col span={16}>
                <Row className="non-margin-left" gutter={16}>
                  <Col span={12} className="form-item">
                    <Form.Item
                      label="Văn phòng làm việc"
                      name={"department"}
                      rules={[
                        {
                          required: true,
                          message: "Bạn chưa chọn văn phòng làm việc",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} className="form-item">
                    <Form.Item name={"type"} label="Loại hình công việc">
                      <Select>
                        <Select.Option value="0">--</Select.Option>
                        <Select.Option value="1">Nam</Select.Option>
                        <Select.Option value="2">Nữ</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row className="non-margin-left" gutter={16}>
                  <Col span={12} className="form-item">
                    <Form.Item label="Phòng ban" name={"department_id"}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8} className="form-item">
                    <Form.Item name={"position_id"} label="Chức vụ / Cấp bậc">
                      <Select>
                        <Select.Option value="0">--</Select.Option>
                        <Select.Option value="1">Nam</Select.Option>
                        <Select.Option value="2">Nữ</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row className="non-margin-left" gutter={16}>
                  <Col span={12} className="form-item">
                    <Form.Item
                      label="Chức danh"
                      name={"job_title"}
                      rules={[
                        { required: true, message: "Bạn chưa nhập chức danh" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={6} className="employee-content-right">
            <Form.Item
              name={"checkin_type"}
              label="Hình thức chấp công"
              rules={[
                {
                  required: true,
                  message: "Bạn chưa chọn hình thức chấm công",
                },
              ]}
            >
              <Select>
                <Select.Option>--</Select.Option>
                <Select.Option>Nam</Select.Option>
                <Select.Option>Nữ</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={"status"}
              label="Trạng thái"
              rules={[{ required: true, message: "Bạn chưa chọn trạng thái" }]}
            >
              <Select>
                <Select.Option>--</Select.Option>
                <Select.Option>Nam</Select.Option>
                <Select.Option>Nữ</Select.Option>
              </Select>
            </Form.Item>

            <Button type="primary" size="large" style={{ width: "100%" }} htmlType="submit">
              Lưu thông tin
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EmployeeForm;
