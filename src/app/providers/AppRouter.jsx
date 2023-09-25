import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '../../pages/index';
import DescriptionPage from '../../pages/extendedDescription';
import { HOME, DESCRIPTION } from '../../shared/utils/consts';

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            <Route path={`${DESCRIPTION}/:postId`} element={<DescriptionPage />} />
            <Route path='*' element={<Navigate to={HOME} />} />
        </Routes>
    );
};

export default AppRouter;
