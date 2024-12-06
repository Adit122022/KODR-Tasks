import React from 'react'
import Heading from '../components/Page2Components/Heading'
import MainSection from '../components/Page2Components/MainSection'
import CardSection from '../components/Page2Components/CardSection'
import Text from '../components/Page1Components/Text'

const Page2 = () => {
  return (
    <>
    <Heading/>
    <MainSection/>
   <div className='bg-white'>
   <CardSection/>
   <Text/>
   </div>
    </>
  )
}

export default Page2