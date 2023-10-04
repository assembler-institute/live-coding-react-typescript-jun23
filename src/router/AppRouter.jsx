import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import PrivateRoutes from './PrivateRoutes';



export const AppRouter = () => {
  return (
    <>

      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={
          <PrivateRoutes>
            <Routes>
              <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
          </PrivateRoutes>
        } />

        {/* <Route path="/*" element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>
        } /> */}

      </Routes>

    </>
  )
}
