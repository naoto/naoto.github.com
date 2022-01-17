import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'

import Heatmap from '../parts/heatmap'

const Welcome: React.FC = () => {
  type Diary = {
    title: string
    date: string
  }

  const [diarys, setDiarys] = useState<Diary[]>([])
  const fetchDiaryList = async () => {
    try {
      const response = await fetch(`https://naoto.github.io/diary_log/list.json`)
      const data = await response.json()
      const data_sort: Diary[] = data.sort((n1: Diary, n2: Diary) => {
        const n1_date = Date.parse(n1.date)
        const n2_date = Date.parse(n2.date)

        return n2_date - n1_date
      })
      setDiarys(data_sort)
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchDiaryList()
  }, [fetchDiaryList])

  return (
    <>
    <h1>Diary</h1>
    <Heatmap diaries={diarys} />
    <ListGroup variant="flush" className='diary'>
      {diarys.map(item => (
        <ListGroup.Item key={item.date}>
          <span className='date'>{item.date}:</span>
          <span className='title'><a href={`/diary/${item.date}`}>{item.title}</a></span>
        </ListGroup.Item>
      ))}
    </ListGroup>
    </>
  )
}

export default Welcome
