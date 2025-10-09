
import './App.css'
import BookScreen from './components/App_Screen/BookScreen'
import StartScreen from './components/App_Screen/StartScreen'
import PasswordScreen from './components/create_accound_flow/PasswordScreen'
import ResetPassword from './components/create_accound_flow/ResetPassword'
import SignUp from './components/create_accound_flow/SignUp'
import WelcomeScreen from './components/create_accound_flow/WelcomeScreen'
import PremiumScreen from './components/Premium Screen/PremiumScreen'

function App() {
  

  return (
    <div>
     {/* <WelcomeScreen/>
     <SignUp/>
     <PasswordScreen/>
     <ResetPassword/>  */}
     {/* <PremiumScreen/> */}
     {/* <StartScreen/> */}
     <BookScreen/>
    </div>
  )
}

export default App
