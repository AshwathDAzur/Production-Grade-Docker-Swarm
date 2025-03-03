import { Routes, Route } from 'react-router-dom';
import routes from './constant/routes.json';
import AppLayout from './container/applayout';
import PageNotFound from './container/pagenotfound';

function AppRouter() {
    return (
        <Routes>
            <Route
                path={routes?.HOME}
                element={
                    <AppLayout screen={<div>Ashwath</div>} />
                }
            />
            <Route path="*" element={
                <AppLayout screen={<PageNotFound />} />
            }
            />
        </Routes>
    );
}

export default AppRouter;
