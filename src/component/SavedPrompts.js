import React from 'react'
import { ChevronRight, Home } from 'react-feather'
import PackCard from './PackCard'
import { Row,Col } from 'react-bootstrap'
import SavePromptCard from './SavePromptCard'

function SavedPrompts() {
  
  const prompts = [
    {
        topic:'Generating Backend Keywords',
        category:'Business',
        icon:'🔑',
        description:"ChatGPT is like a personal DJ, but instead of playing music, it spins words like a pro! With ...",
        countnumber:'1',
        id:1
 },
{
  topic:'Automating Instagram Growth',
    category:'Business',
    countnumber:'12',
    description:"ChatGPT is like a personal DJ, but instead of playing music, it spins words like a pro! With ...",
    icon:'📈',
    id:2
},
{
  topic:'Developing a Brand Voice and Tone Guide',
    category:'Business',
    description:"ChatGPT is like a personal DJ, but instead of playing music, it spins words like a pro! With ...",
    countnumber:'3',
    icon:'🔨',
    id:3
},
{
  topic:'Developing a Brand Voice and Tone Guide',
    category:'Business',
    description:"ChatGPT is like a personal DJ, but instead of playing music, it spins words like a pro! With ...",
    countnumber:'3',
    icon:'🔨',
    id:4
}
]
  return (
    <>
<div className='promptsHeaderContainer'>
    <div className='breadcru d-flex align-items-center'>
    <Home  size={25}/>
    <ChevronRight className='mx-2'  size={20} color='#eee'/>
    <span className=' fs-5'>Saved</span>
    </div>

    <div className='pt-3'>
        <p className='fw-600 promptsHeaderBigText'>Saved Prompts</p>
        <p className='text-light-emphasis promptsHeadersmallText'>Here you can find all of your saved Prompts.</p>
    </div>
</div>
    <div className='pt-5 pb-5 promptsPackCard' style={{background:'#F9FAFB'}}>
       <Row>
       <SavePromptCard prompts={prompts}/>
       </Row>
      
    </div>
    </>
  )
}

export default SavedPrompts