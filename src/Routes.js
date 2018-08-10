import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Errorpage from './pages/Errorpage'

export default class Routes extends React.Component<{}> {
        render() {
            return (
                 <Router>
                    <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} />
                    <Scene key="signup" component={Signup} />
                    <Scene key="errorpage" component={Errorpage} />
                    <Scene key="profile" component={Profile} />
                    </Stack>
                </Router>
            )
        }
}