import React from 'react';
import { logout } from '../core/middleware/Auth';

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
      path: 'event-details/:event/user/:user',
      component: require('../components/pages/EventDetails.jsx').default
    },
    {
      path: 'event-general/:event/user/:user',
      component: require('../components/pages/EventGeneral.jsx').default
    },
    {
      path: 'event-request/:event/user/:user',
      component: require('../components/pages/EventRequest.jsx').default
    },
    {
      path: 'event-accept/:event',
      component: require('../components/pages/EventAccept.jsx').default
    },
    {
      path: 'event-add',
      component: require('../components/pages/event-add/Categories.jsx').default
    },
    {
      path: 'event-add/:category',
      component: require('../components/pages/event-add/Subcategories.jsx').default
    },
    {
      path: 'event-add/:category/:subcategory/location',
      component: require('../components/pages/event-add/Location.jsx').default
    },
    {
      path: 'event-add/:category/:subcategory/date',
      component: require('../components/pages/event-add/Date.jsx').default
    },
    {
      path: 'event-add/:category/:subcategory/name',
      component: require('../components/pages/event-add/Name.jsx').default
    },
    {
      path: 'profile/information',
      component: require('../components/pages/profile/UserInfo.jsx').default
    },
    {
      path: 'profile/:user/information',
      component: require('../components/pages/profile/ProfileInfo.jsx').default
    },
    {
      path: 'profile/contacts',
      component: require('../components/pages/profile/Contacts.jsx').default
    },
    {
      path: 'logout',
      component: logout
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
