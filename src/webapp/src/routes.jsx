import { Routes, Route } from 'react-router-dom';
import routes from './constant/routes.json';
import AppLayout from './container/applayout';

function AppRouter() {
    return (
        <Routes>
            <Route
                path={routes?.HOME}
                element={
                    <AppLayout screen={<div>Ashwath</div>} />
                }
            />
            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
    );
}

export default AppRouter;
