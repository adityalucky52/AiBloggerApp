
import { Link } from 'react-router-dom';
import { assets, dashboard_data } from '../../assets/assets';
import BlogtableItem from '../../Components/admin/BlogtableItem';
import { useEffect, useState } from 'react';

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []  });
  const stats = [
    { title: 'Total Blogs', value: dashboard_data.blogs, icon: assets.dashboard_icon_1, link: '/admin/listBlog' },
    { title: 'Total Comments', value: dashboard_data.comments, icon: assets.dashboard_icon_2, link: '/admin/comments' },
    { title: 'Drafts', value: dashboard_data.drafts, icon: assets.dashboard_icon_3, link: '/admin/listBlog' },
    { title: 'New Blog', value: '+', icon: assets.dashboard_icon_4, link: '/admin/addBlog' },
  ];

  const fetchDashboard = async() => {
    setDashboardData(dashboard_data);
  }

  useEffect(() => {
    // Fetch dashboard data if needed
    fetchDashboard(dashboard_data);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link to={stat.link} key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <img src={stat.icon} alt={stat.title} className="w-6 h-6" />
            </div>
          </Link>
        ))}
      </div>

     
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Blogs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blog Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>

              {dashboard_data.recentBlogs.map((blog, index) => (
                <BlogtableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index} />
             ) ) }
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;