import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import {AppThemeContextProvider} from './context/AppThemeContext' 
import {  BreadcrumpContextProvider } from './context/BreadcrumbsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <AppThemeContext.Provider value={initialState}>
        <App />
      </AppThemeContext.Provider> */}
      <AppThemeContextProvider>
        <BreadcrumpContextProvider>
          <App />
          </BreadcrumpContextProvider>
      </AppThemeContextProvider>
    </Provider>
  </StrictMode>,
)
