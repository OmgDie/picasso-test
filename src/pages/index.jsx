import HomePage from "./home/index";
import DescriptionPage from "./extendedDescription/index";
import { HOME, DESCRIPTION } from "../shared/utils/consts";

export const publicRoutes = [
    {
        path: HOME,
        Component: HomePage
    },

    {
        path: DESCRIPTION,
        Component: DescriptionPage
    }
]
