import React from 'react'
import { Jumbo } from './App/styles'

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Jumbo message='Home Page' />
    </>
  )
}

export default Home
