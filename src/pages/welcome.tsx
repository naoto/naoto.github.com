import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'

const Welcome: React.FC = () => {
  type Diary = {
    title: string
    date: string
  }

  const [diarys, setDiarys] = useState<Diary[]>([])
  const fetchDiaryList = async () => {
    try {
      const response = await fetch(`https://naoto.github.io/diary/list.json`)
      const data = await response.json()
      setDiarys(data)
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchDiaryList()
  }, [])

  return (
    <>
    <h1>Diary</h1>
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
