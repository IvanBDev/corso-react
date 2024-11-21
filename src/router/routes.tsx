import {LayoutComponent} from "../components/Layout/LayoutComponent.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {RegistrationPage} from "../pages/RegistrationPage.tsx";
import {DashboardPage} from "../pages/DashboardPage.tsx";

export const routes = [
    {
        element: <LayoutComponent/>,
        children: [
            {
                path: `/`,
                children: [
                    {
                        path: ``,
                        element: <LoginPage/>
                    },
                    {
                      path: `login`,
                      element:  <LoginPage/>
                    },
                    {
                      path: `register`,
                      element: <RegistrationPage/>
                    },
                    {
                        path: `dashboard/`,
                        children: [
                            {
                                path: ``,
                                element: <DashboardPage/>
                            }
                        ]
                    }
                    // {
                    //     path: `users/`,
                    //     children: [
                    //         {
                    //             path: 'login',
                    //             element: <h1>Login</h1>
                    //         }
                    //     ]
                    // }
                ]
            }
        ]
    },
    {
        path: `*`,
        element: <h1>404: Page not found</h1>
}
]