import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge, Breadcrumb, Button, Col, Popover, Row, Tooltip } from "antd";
import { shallow } from "zustand/shallow";
import useEmployeeStore from "../../pages/Employee/store";
import Filter from "../Filter";
import PaginationPopup from "../PaginationPopup";
import "./index.scss";

interface ContentHeaderProps {
  title: React.ReactNode;
  breakcrum?: React.ReactNode;
  actions?: React.ReactNode[];
  total?: React.ReactNode;
  showFilter?: boolean;
}

const ContentHeader = ({
  title,
  breakcrum,
  actions,
  total,
  showFilter,
}: ContentHeaderProps) => {
  const { filter, setFilter, pagination, fetchEmployee } = useEmployeeStore(
    (state) => ({ filter: state.filter, setFilter: state.setFilter, pagination: state.pagination, fetchEmployee: state.fetchEmployee }),
    shallow
  );

  const badge = [!!filter?.keyword, !!filter?.department, !!filter?.office, !!filter?.type, !!filter?.status].filter(x => filter?.active && x).length

  const handleClearFilter = async () => {
    if (filter?.active){
      await fetchEmployee({keyword: '', office: '', department: '', type: '', status: '', open: false, active: false})
    }
  };

  return (
    <div className="content-header__wrapper">
      <Row className="content-header__info">
        <Col span={12}>
          {breakcrum && (
            <div className="content-header__breakcrum">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/employee">{breakcrum}</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          )}
          <div className="content-header__title">{title}</div>
        </Col>
        <Col span={12}>
          <Row justify={"end"}>{actions?.map((action) => action)}</Row>
        </Col>
      </Row>
      {showFilter && (
        <Row gutter={4} align="top" className="content-header__filter">
          <Col style={{ marginBottom: -1 }}>
            <p
              className={`content-header__total-inform ${
                filter?.active ? "hover" : ""
              }`}
              onClick={handleClearFilter}
            >
              {filter?.active ? 'Kết quả tìm kiếm' : 'Tất cả'} <span className="total-numbers">({pagination.total})</span>
            </p>
          </Col>
          <Col>
            <Popover
              placement="bottomLeft"
              content={<Filter />}
              trigger="click"
              open={filter?.open}
              onOpenChange={(open: boolean) => setFilter({ open })}
            >
              <Button type="text">
                <Badge count={badge} size="small">
                  <SearchOutlined style={{ fontSize: "14px" }} />
                </Badge>{" "}
                &nbsp;&nbsp;Bộ lọc và tìm kiếm...
              </Button>
            </Popover>
          </Col>
          {filter?.active && 
            <Col>
            <Button
              type="text"
              style={{ color: "red" }}
              onClick={handleClearFilter}
            >
              <CloseOutlined style={{ fontSize: "12px" }} />
              Bỏ lọc
            </Button>
          </Col>}
          <Col style={{ flex: 1 }}>
            <Row justify={"end"}>
              <Tooltip title="Trang trước" placement="bottom">
                <Button style={{ padding: 4 }} type="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginBottom: "4px" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="15 6 9 12 15 18"></polyline>
                  </svg>
                </Button>
              </Tooltip>

              <Popover
                placement="bottom"
                content={<PaginationPopup total={2} />}
                trigger="click"
              >
                <Button type="text">
                  Trang
                  <span> &nbsp;1 /&nbsp; </span>
                  <span style={{ color: "rgba(156,163,175,1)" }}>1</span>
                </Button>
              </Popover>

              <Tooltip title="Trang sau" placement="bottom">
                <Button style={{ padding: 4 }} type="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginBottom: "4px" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="9 6 15 12 9 18"></polyline>
                  </svg>
                </Button>
              </Tooltip>
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ContentHeader;
