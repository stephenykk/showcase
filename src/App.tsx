
import RouteList from '@/routes'
import { /* createLogger, toast, */ initNav } from '@/utils'
import { useNavigate } from 'react-router';
import { useAllCategories } from './hooks';

import * as utils from '@/utils'
Object.assign(window, { utils });

window.clog = (...args: any[]) => {
  console.log('[CLOG]: ', ...args)
}

// import SvgIcon from './components/SvgIcon'

// const logger = createLogger('app')

function App() {
  // react18 StrictMode 开发环境会执行2次
  /* useEffect(() => {
    getToken()
  }, []) */

  // toast.success('page ready')

  const navigate = useNavigate()
  initNav(navigate)

  useAllCategories()

  return (
    <div className="app">
      <RouteList />
    </div>
  )
}

export default App
