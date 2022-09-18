import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import FragmentPage from './topics/topicsPages/FragmentPage'
interface IApp{}
const App:React.FC<IApp>=(props)=>{
  return (<>
  <Router>
    <Routes>
      <Route path="/project" />
    </Routes>
    <Routes>
      <Route path="/topics/fragment" element={<FragmentPage/>}/>
    </Routes>
  </Router>
  </>)
}
export default App