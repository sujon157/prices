
// import {mathMarksData } from 'autoprefixer';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

   
    const marks = [
        { "id": 1, "student": "John Doe", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 82 },
        { "id": 2, "student": "Jane Smith", "math_marks": 78, "physics_marks": 82, "chemistry_marks": 75 },
        { "id": 3, "student": "Michael Johnson", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 90 },
        { "id": 4, "student": "Emily Davis", "math_marks": 65, "physics_marks": 70, "chemistry_marks": 68 },
        { "id": 5, "student": "David Brown", "math_marks": 70, "physics_marks": 75, "chemistry_marks": 72 },
        { "id": 6, "student": "Sarah Wilson", "math_marks": 88, "physics_marks": 85, "chemistry_marks": 80 },
        { "id": 7, "student": "Christopher Martinez", "math_marks": 75, "physics_marks": 78, "chemistry_marks":74 },
        { "id": 8, "student": "Jessica Taylor", "math_marks": 83, "physics_marks": 80, "chemistry_marks": 85 },
        { "id": 9, "student": "Daniel Anderson", "math_marks": 90, "physics_marks": 92, "chemistry_marks": 88 },
        { "id": 10, "student": "Amanda Thomas", "math_marks": 72, "physics_marks": 68, "chemistry_marks": 70 }
                 ]


    return (
        <div className='mt-10' >

            <LChart width={800} height={400} data={marks}>

                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_marks" stroke='red'></Line>
                <Line dataKey="physics_marks" stroke='blue'></Line>
                <Line dataKey="chemistry_marks" stroke='green'></Line>
                
            </LChart>
        </div>
    );
};

export default LineChart;