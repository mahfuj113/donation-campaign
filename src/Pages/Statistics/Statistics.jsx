import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
const Statistics = () => {
    const jsonDataItem = useLoaderData()
    const localData = JSON.parse(localStorage.getItem("donation"))

    const exist = localData ? (localData.length) : 0;

    const data = [
        { name: 'Group A', value: jsonDataItem.length },
        { name: 'Group B', value: exist },
    ];
    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text className='text-4xl font-bold' x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
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
    );
};

export default Statistics;