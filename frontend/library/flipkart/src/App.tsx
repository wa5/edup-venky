import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NotFound from './topics/topicsPages/404/NotFound'
import FragmentPage from './topics/topicsPages/FragmentPage'
import { Gridsystem } from './topics/topicsPages/layout/Gridsystem'
import MuiTopics from './topics/topicsPages/MuiTopics'
interface IApp{}
const App:React.FC<IApp>=(props)=>{
  return (<>
  <Router>
    <Routes>
      <Route path="/project" />
    </Routes>
    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/layout' element={<Gridsystem/>}/>

      <Route path="/mui/fragment" element={<FragmentPage/>}/>
      <Route path='/mui/page' element={<MuiTopics/>}/>
    </Routes>
  </Router>
  </>)
}
export default App