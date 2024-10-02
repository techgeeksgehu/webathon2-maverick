import React from 'react'
import Footer from '../components/Footer'

import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts'
import { Users, Calendar, Briefcase } from 'lucide-react'

import { ChartArea } from 'lucide-react';

import Navbar from '../components/Navbar'

const Card = ({ title, value, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
    <div className="rounded-full bg-blue-100 p-3 mr-4">
      <Icon size={24} className="text-blue-600" />
    </div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
)

const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
  </div>
)

const SimpleSiteAnalyticsDashboard = () => {
  // Mock data - replace with real data in a production environment
  const visitorData = [
    { name: 'Jan', visitors: 4000 },
    { name: 'Feb', visitors: 3000 },
    { name: 'Mar', visitors: 5000 },
    { name: 'Apr', visitors: 4500 },
    { name: 'May', visitors: 6000 },
    { name: 'Jun', visitors: 5500 },
  ]

  const eventData = [
    { name: 'Pitch Night', attendance: 150 },
    { name: 'AI Workshop', attendance: 100 },
    { name: 'Networking', attendance: 200 },
    { name: 'Hackathon', attendance: 300 },
    { name: 'Funding Seminar', attendance: 120 },
  ]

  const ideaSubmissionData = [
    { name: 'Tech', value: 400 },
    { name: 'Health', value: 300 },
    { name: 'Finance', value: 300 },
    { name: 'Education', value: 200 },
    { name: 'Others', value: 100 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen p-8">
    <ChartArea className="mx-auto h-20 w-20 text-red-600" />
      <h1 className="text-8xl font-extrabold mb-8 text-center">SIC Site Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card title="Total Visitors" value="25,430" icon={Users} />
        <Card title="Event Sign-ups" value="3,890" icon={Calendar} />
        <Card title="Idea Submissions" value="1,245" icon={Briefcase} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <ChartCard title="Visitor Trends">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visitors" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Event Attendance">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={eventData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attendance" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Idea Submissions by Category">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={ideaSubmissionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {ideaSubmissionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
    <Footer />
    </>
  )
}

export default SimpleSiteAnalyticsDashboard