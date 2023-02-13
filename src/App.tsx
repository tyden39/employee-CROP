import { message } from 'antd';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './app.css'
import LayoutWrapper from './components/LayoutWrapper';
import useGlobalStore from './globalStore';
import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';
import EmployeeForm from './pages/Employee/EmployeeForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    errorElement: <>Error</>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/employee/add",
        element: <EmployeeForm type="add" />,
      },
      {
        path: "/employee/edit/:employeeId",
        element: <EmployeeForm type="edit" />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
    ]
  },
  
]);

const App = () => {
  const setNotification = useGlobalStore(state => state.setNotification)
  const [messageApi, contextHolder] = message.useMessage();
  
  useEffect(() => {
    setNotification(messageApi)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
};

export default App;