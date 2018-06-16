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


    /** Registration routes */
    {
      path: 'register/interests',
      component: require('../components/pages/register/Interests.jsx').default
    },
    {
      path: 'register/photo',
      component: require('../components/pages/register/Photo.jsx').default
    },
    {
      path: 'register/type',
      component: require('../components/pages/register/Type.jsx').default
    },
    {
      path: 'register/settings',
      component: require('../components/pages/register/Settings.jsx').default
    },
    {
      path: 'register/email-confirmation',
      component: require('../components/pages/register/EmailConfirmation.jsx').default
    },


    {
      path: 'dashboard',
      component: require('../components/pages/Dashboard.jsx').default
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


    /** Event add routes */
    {
      path: 'event-add',
      component: require('../components/pages/event-add/Agreements.jsx').default
    },
    {
      path: 'event-add/description',
      component: require('../components/pages/event-add/Description.jsx').default
    },
    {
      path: 'event-add/categories',
      component: require('../components/pages/event-add/Categories.jsx').default
    },
    {
      path: 'event-add/date-place',
      component: require('../components/pages/event-add/DatePlace.jsx').default
    },
    {
      path: 'event-add/tickets-bought',
      component: require('../components/pages/event-add/TicketsBought.jsx').default
    },
    {
      path: 'event-add/meeting-point',
      component: require('../components/pages/event-add/MeetingPoint.jsx').default
    },


    /** Profile settings routes */
    {
      path: 'profile/information',
      component: require('../components/pages/profile/Information.jsx').default
    },
    {
      path: 'profile/interests',
      component: require('../components/pages/profile/Interests.jsx').default
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
      path: 'profile/settings',
      component: require('../components/pages/profile/Settings.jsx').default
    },
    {
      path: 'profile/notifications',
      component: require('../components/pages/profile/Notifications.jsx').default
    },
    {
      path: 'profile/payments-history',
      component: require('../components/pages/profile/PaymentsHistory.jsx').default
    },
    {
      path: 'profile/password-change',
      component: require('../components/pages/profile/PasswordChange.jsx').default
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
