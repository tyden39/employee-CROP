import { Divider } from "antd"
import './index.scss'

interface ExtraInfoProps {
  data: any,
}

const ExtraInfo = ({data}: ExtraInfoProps) => {
  return (
    <div className="extra-info">
      <p><span>SYSTEM ID:</span> {data.id}</p>
      <p><span>NGƯỜI TẠO:</span> {data.id}</p>
      <p><span>NGÀY TẠO:</span> {data.date_created}</p>
      <p><span>NGÀY CẬP NHẬT:</span> {data.date_modified}</p>
      <Divider />
      <p><span>USER ID:</span> {data.user_id}</p>
      <p><span>ĐIỆN THOẠI:</span> {data.phone}</p>
      <p><span>EMAIL:</span> {data.email}</p>
      <p><span>HÌNH THỨC CHẤM CÔNG:</span> {data.type}</p>
    </div>
  )
}

export default ExtraInfo
