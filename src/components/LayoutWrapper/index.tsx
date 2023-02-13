
import { Layout, Menu, MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';
import './index.scss';

const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

type MenuItem = Required<MenuProps>['items'][number];

const iconList: React.ReactNode[] = [
  <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="9" cy="7" r="4"></circle><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path><line x1="3" y1="9" x2="7" y2="9"></line></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="12" width="6" height="8" rx="1"></rect><rect x="9" y="8" width="6" height="12" rx="1"></rect><rect x="15" y="4" width="6" height="16" rx="1"></rect><line x1="4" y1="20" x2="18" y2="20"></line></svg>
]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items2: MenuProps['items'] = [
  getItem('BÁN HÀNG', 'sub1', iconList[0], [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1', null, [getItem('Option 1', '1')]), getItem('Option 2', '6')], 'group'),
  ]),
  getItem('TỒN KHO', 'sub2', iconList[1], [
    getItem('Item 1', 'g2', null, [getItem('Option 1', '2'), getItem('Option 2', '7')], 'group'),
  ]),
  getItem('NHÂN SỰ', 'sub3', iconList[2], [
    getItem('Item 1', 'g3', null, [getItem('Option 1', '3'), getItem('Option 2', '8')], 'group'),
  ]),
  getItem('GIAO HÀNG', 'sub4', iconList[3], [
    getItem('Item 1', 'g4', null, [getItem('Option 1', '4'), getItem('Option 2', '9')], 'group'),
  ]),
  getItem('BÁO CÁO', 'sub5', iconList[4], [
    getItem('Item 1', 'g5', null, [getItem('Option 1', '5'), getItem('Option 2', '12')], 'group'),
  ]),
];

const LayoutWrapper = () => {
  return (
    <Layout style={{overflow: 'hidden'}}>
      <Header style={{height: '60px'}}>
        <Menu style={{height: '60px'}} mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider collapsed>
          <Menu
            className='main-menu'
            style={{height: 'calc(100vh - 60px)'}}
            defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            items={items2}
          />
        </Sider>
        <Layout style={{
          height: 'calc(100vh - 60px)',
        }}>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutWrapper
