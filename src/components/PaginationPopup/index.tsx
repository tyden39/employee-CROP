import { InputNumber } from "antd"
import './index.scss'

interface PaginationPopupProps {
  total: number,
}

const PaginationPopup = ({total}: PaginationPopupProps) => {
  return <InputNumber className="pagination-popup" onPressEnter={(e) => {
    const newValue = e.target as HTMLInputElement;
    console.dir(newValue.value);
  }} addonBefore="Tới trang" addonAfter={`/${total}`} min={1} max={total}/>
}

export default PaginationPopup