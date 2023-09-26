import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
const Statistics = () => {
    const jsonDataItem = useLoaderData()
    const [percent, setPercent] = useState(0)
    useEffect(() => {
        const localData = localStorage.getItem("donation") ? JSON.parse(localStorage.getItem("donation")) : [] ;
        setPercent(localData.length / jsonDataItem.length)
    },[jsonDataItem])

    const data = [
        { name: 'Group A', value: percent * 100 },
        { name: 'Group B', value: 100 - percent * 100 },
    ];
    const COLORS = [ '#00C49F','#FF444A'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text className='text-2xl font-semibold' x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
    return (
        <div>
            <div className='flex justify-center items-center'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='md:flex justify-center items-center  gap-14 mt-16'>
                <div className='flex items-center justify-center gap-4'>
                    <p>Your Donation</p>
                    <div className='bg-[#00C49F] h-3 w-[100px]'></div>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <p>Total Donation</p>
                    <div className='bg-[#FF444A] h-3 w-[100px]'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;