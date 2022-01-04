import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Diary: React.FC = () => {
  type Diary = {
    title: string
    date: string
    body: string
  }

  const param = useParams<{id: string}>()
  const [diary, setDiary] = useState<Diary>({title: "", date: "", body: ""})

  const fetchDiary = async (id:string) => {
    try {
      const response = await fetch(`https://naoto.github.io/diary/${id}.json`)
      const data = await response.json()
      setDiary(data)
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (param.id !== undefined) {
      fetchDiary(param.id)
    }
  }, [param])

  return (
    <div className='diary'>
      <span className='date'>{diary?.date}</span>
      <span className='title'>{diary?.title}</span>
      <hr/>
      <span className='content' dangerouslySetInnerHTML={{ __html: diary?.body}} />
    </div>
  )
}

export default Diary
