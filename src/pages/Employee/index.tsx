import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Popover, Space, Table, Tag } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { shallow } from "zustand/shallow";
import ContentHeader from "../../components/ContentHeader";
import useGlobalStore from "../../globalStore";
import ExtraInfo from "./ExtraInfo";
import "./index.scss";
import useEmployeeStore from "./store";

const Employee = () => {
  const notification = useGlobalStore((state) => state.notification);
  const { employeeList, fetchEmployee, loading } = useEmployeeStore(
    (state) => ({
      loading: state.loading,
      employeeList: state.employeeList,
      fetchEmployee: state.fetchEmployee,
    }),
    shallow
  );

  const columnList = [
    {
      key: "avatar",
      dataIndex: 'avatar'
    },
    {
      title: "HỌ VÀ TÊN",
      dataIndex: "full_name",
      key: "full_name",
      render: (text: string, record: any) => (
        <Link to={`/employee/edit/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "CHỨC DANH ",
      dataIndex: "job_title",
      key: "job_title",
    },
    {
      title: "VĂN PHÒNG",
      dataIndex: "office_id",
      key: "office_id",
    },
    {
      title: "PHÒNG BAN",
      dataIndex: "department_id",
      key: "department_id",
    },
    {
      title: "MÃ NHÂN VIÊN",
      dataIndex: "internal_id",
      key: "internal_id",
    },
    {
      title: "LOẠI HÌNH CÔNG VIỆC",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "TRẠNG THÁI",
      dataIndex: "status",
      key: "status",
      render: (text: string, record: any) =>
        record.status === 1 ? (
          <Tag color={"green"} style={{ border: "0" }}>
            Có hiệu lực
          </Tag>
        ) : (
          <Tag color={"red"} style={{ border: "0" }}>
            Vô hiệu lực
          </Tag>
        ),
    },
    {
      dataIndex: 'actions',
      key: "actions",
      render: (text: String, record: any, index: number) => (
        <Space size="middle">
          <a href={`employee/edit/${index}`}>Edit</a>
          <Popconfirm
            placement="topRight"
            title={"Bạn có muốn xoá dòng này"}
            onConfirm={async () => {
              try {
                const employeeId = record.id;
                await axios.delete(
                  `https://api.cropany.com/v1/employees/${employeeId}`,
                  {
                    headers: {
                      Authorization: "9ed3624a593e7773923e2e8e2fa2f660",
                    },
                  }
                );
                success();
                fetchEmployee();
              } catch (error) {}
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="text" style={{ padding: "0 7px" }}>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
          <Popover
            placement="bottomRight"
            content={<ExtraInfo data={record} />}
            trigger="click"
          >
            <Button type="text" style={{ padding: "0 7px" }}>
              <InfoCircleOutlined />
            </Button>
          </Popover>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchEmployee()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const success = () => {
    notification?.open({
      type: "success",
      content: "This is a prompt message with custom className and style",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };

  return (
    <>
      <ContentHeader
        title="Nhân viên"
        actions={[
          <Button key="action-1" type="primary" href="/employee/add">
            Thêm mới
          </Button>,
        ]}
        total={5}
        showFilter={true}
      />
      <Table
        className="pagedatatableview"
        size="middle"
        loading={loading}
        rowKey="id"
        columns={columnList}
        dataSource={employeeList}
        pagination={false}
      />
    </>
  );
};

export default Employee;
