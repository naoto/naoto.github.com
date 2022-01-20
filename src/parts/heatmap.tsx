import React from 'react'
import CalendarHeatmap from "react-calendar-heatmap"
import "react-calendar-heatmap/dist/styles.css"

type Diary = {
  title: string
  date: string
}

type Props = {
  diaries: Array<Diary>
}

const Heatmap: React.FC<Props> = props => {
  const diaries = props.diaries.map(function(diary) {
    return { date: diary.date, count: 1 }
  })

  return(
    <div className="container">
      <div>
        <CalendarHeatmap
          startDate={new Date("2022-01-01")}
          endDate={new Date("2022-01-01")}
          values={diaries}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
              return `color-scale-${value.count}`;
            }}
          />
      </div>
    </div>
  )
}

export default Heatmap


