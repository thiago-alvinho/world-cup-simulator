import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@/components/ui/provider'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Box } from '@chakra-ui/react'
import Header from './components/ui/Header/Header'
import Home from './routes/Home.jsx'
import Groups from './routes/Groups'
import Matches from './routes/Matches'
import Bracket from './routes/Bracket'
import Error from './routes/Error'

createRoot(document.getElementById('root')).render(
    <Provider>
      <Box minH="100vh" bg="#220925" color="white" fontFamily="'Manrope', sans-serif">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/matches/:groupID' element={<Matches />}/>
            <Route path='/bracket' element={<Bracket />}/>
            <Route path= '/error' element={<Error />}/>
          </Routes>
        </BrowserRouter>
      </Box>
    </Provider>
)
