import React from 'react';
import User from '../core/helpers/User';

const routes = {
  // Default routes list
  default: [
    {
      path: 'home',
      component: require('../components/pages/Home.jsx').default
    },
    {
      path: 'how-it-works',
      component: require('../components/pages/HowItWorks.jsx').default
    },
    {
      path: 'interests',
      component: require('../components/pages/Interests.jsx').default
    },
    {
      path: 'dashboard',
      component: require('../components/pages/Dashboard.jsx').default
    },
    {
      path: 'email-confirmation',
      component: require('../components/pages/EmailConfirmation.jsx').default
    },
    {
      path: 'register-photo',
      component: require('../components/pages/RegisterPhoto.jsx').default
    },
    {
      path: 'register-type',
      component: require('../components/pages/RegisterType.jsx').default
    },
    {
      path: 'register-settings',
      component: require('../components/pages/RegisterSettings.jsx').default
    },
    {
      path: 'register-interests',
      component: require('../components/pages/Interests.jsx').default
    },
    {
      path: 'event-proposals/:id',
      component: require('../components/pages/EventProposals.jsx').default
    },
    {
      path: 'event-requests/:event/user/:user',
      component: require('../components/pages/EventRequests.jsx').default
    },
    {
      path: 'logout',
      component: (props) => {
        // Make logout request

        // Remove localStorage data
        User.endSession();

        // Redirect to default url
        props.router.push('/');

        return null;
      }
    },
    // {
    //   path: ['about-us(/:id)', 'delivery(/:id)'],
    //   component: require('../components/pages/WithMenu.jsx').default
    // },
  ],

  resolve: function (route) {
    // Return default route component
    const component = this.default.filter(
      (r) => r.path === route || r.path.indexOf(route) !== -1
    )[0].component;

    return component;
  }
};

// Creating routes list
module.exports = routes.default.map((route) => {
  return {
    path: route.path,
    resolve: (nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, routes.resolve(route.path));
      });
    }
  };
});
