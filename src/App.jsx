import { useRef, useState } from 'react'
// import {GithubProfileCard} from '../library/index'
import {GithubProfileCard} from 'github-insights-card'
import './App.css'
import ColorthemeCard from './components/ColorThemeCard'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import edit_btn from './assets/edit.svg'

function App() {

  const [theme,setTheme] = useState('Default')
  const [codeDisplay,setCodeDisplay] = useState(false)
  const [githubUser,setGithubUser] = useState('sosumit001')
  const [editOn,setEditOn] = useState(true)
  const inputRef = useRef()

  const handleGithubUser = () => {
    const username = inputRef.current.value
    setGithubUser(username)
  }

  const componentCode = `
  <GithubProfileCard 
    username="${githubUser}"
    theme="${theme}"
    width="380px" // (default value is 290px)
  />
  `

  const handleCodeDisplay = () => {
    if(!codeDisplay) {
      setCodeDisplay(true)
    } else {
      setCodeDisplay(false)
    }
  }

  const handleEditBtn = () => {
    if(!editOn) {
      setEditOn(true)
    } else {
      setEditOn(false)
    }
  }


  return (
    <>
      <div id="App">
        <GithubProfileCard width={'290px'} theme = {theme} username={githubUser} />
        <div>

        <div 
        style={
          editOn?{
            display:'flex',
            flexDirection:'column'
          }:{
            display:'none'
          }
        }
        className="component-controller">
          <div className="github-username-input-container">
            <input ref={inputRef} placeholder='github-username' type="text" name="text" id="githubUsernameInput" />
            <button onClick={handleGithubUser} >search</button>
          </div>

          <div className="color-theme-container">
            <h3>Theme</h3>
            <ColorthemeCard Onclick = {() => {setTheme('Default')}}  c1={'#fff'} c2={'#ffe'} c3={'#fff'} />
            <ColorthemeCard Onclick = {() => {setTheme('DarkKnight')}} c1={'#C0C0C0'} c2={'#ABA6A6'} c3={'#949191'} />
            <ColorthemeCard Onclick = {() => {setTheme('EmeraldGreen')}} c1={'#50C878'} c2={'#FFFFF0'} c3={'#FFFFF6'} />
            <ColorthemeCard Onclick = {() => {setTheme('PastelDreams')}}  c1={'#FFB6C1'} c2={'#F8DAF6'} c3={'#FFE4FD'} />
            <ColorthemeCard Onclick = {() => {setTheme('SereneMeadow')}} c1={'#87CEEB'} c2={'#F0FFFF'} c3={'#F7FFFF'} />
            <ColorthemeCard Onclick = {() => {setTheme('GoldenBreeze')}} c1={'#007BFF'} c2={'#FFD700'} c3={'#FDDA19'} />
          </div>

          <div className="copy-comp-code-container">
            <div 
            style={
              codeDisplay?{
                top:'0'
              }:{
                top:'100%'
              }
            }
            className="github-component-code-sidebar">
              <SyntaxHighlighter language='javascript' style={dracula} >
              {
                componentCode
              }
              </SyntaxHighlighter>
            </div>
          </div>
     
        <button
         style={
          codeDisplay?{
            width:'150px'
          }:{
            width:'180px'
          }
         }
         className='github-cmp-btn' onClick={handleCodeDisplay}>{codeDisplay?'Close':<span>Copy <code>component</code></span>}</button>
          </div>
        </div>
        <div
         onClick={handleEditBtn}
         className="github-edit-mobile-btn">
          <img src={edit_btn} alt="edit" />
        </div>
       </div>
    </>
  )
}

export default App
