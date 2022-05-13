import { Bar } from 'react-chartjs-2'

export const BarChart = ({ chartData }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderStyle: 'solid',
      borderColor: 'blue',
      borderWidth: '2px',
      borderRadius: '10px'
    }}>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: '20 Most Sold Collections of the Past Hour',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  )
}
