import Input from './UI/Input'
import React, { useState } from 'react'
import { NotificationManager } from 'react-notifications';

const NewMovie = () => {

  const [title, setTitle] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const nameHandler = event => {
    setTitle(event.target.value)
  }
  const dateHandler = event => {
    setReleaseDate(event.target.value)
  }

  const submitMovie = async (movie) => {
    setIsLoading(true)
    try {
      const response = await fetch("https://react-http-24d3c-default-rtdb.firebaseio.com/movies.json",
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) throw Error('Something went wrong !')

      NotificationManager.success('Movie added successfully')
      setTitle('')
      setReleaseDate('')

    } catch(error) {
      NotificationManager.error(error.message)
    }
    setIsLoading(false)
  }

  const submitHandler = event => {
    event.preventDefault()
    if (title.length && releaseDate.length) {
      submitMovie({title: title, release_date: releaseDate})
    }
    else {
      NotificationManager.error('All fields required!')
    }
  }

  return (
  <div className='col-sm-6'>
    <form onSubmit= {submitHandler}>
      <Input type='text' placeholder='Movie Title' value={title} onChange={nameHandler} className = 'form-group' />
      <Input type='date' placeholder='Movie Release Date' value={releaseDate} onChange={dateHandler} className = 'form-group' /><br/>
      <div className= 'btn-group'>
        <button type="submit" className={`btn btn-secondary ${isLoading ? 'disabled' : ''}`}>{isLoading ? 'Submiting...' : 'Add Movie'}</button>
      </div>
    </form>
  </div>
  )
}


export default NewMovie