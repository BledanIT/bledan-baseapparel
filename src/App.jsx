import Logo from './components/Logo'
import TextContent from './components/TextContent'
import InputEmail from './components/InputEmail'
import Attribution from './components/Attribution'

const App = () => {
  return (
    <div className = 'font-josefin flex flex-col h-screen m-0'>
      <div className = 'grid lg:grid-cols-[3fr_2fr] lg:grid-rows-[2fr_2fr_2fr] h-full pb-20 lg:pb-0'>
        <Logo />
        <img src='./images/hero-mobile.jpg' alt='header image' className='w-full block lg:hidden'></img>
        <img src='./images/hero-desktop.jpg' alt='header image' className='size-full hidden object-cover lg:block row-span-3'></img>
        <TextContent />
        <InputEmail />
      </div>
      <Attribution />
    </div>
  )
}

export default App
