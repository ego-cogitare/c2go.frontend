export default class GooglePlus
{
  constructor() {
    gapi.load('client:auth2', function() {
      gapi.client.init({
        apiKey: config.GOOGLEPLUS_API_KEY,
        discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
        clientId: config.GOOGLEPLUS_APP_ID + '.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.me'
      })
      .then(function(r) {

      });
    });
  }

  login(success, fail) {
    const auth = gapi.auth2.getAuthInstance();

    // If user logged in - fetch user info or sign in user othwerwise
    auth.isSignedIn.get() ? this.fetchUser(success, fail) : auth.signIn();

    auth.isSignedIn.listen((isSignedIn) => {
      isSignedIn && this.fetchUser(success, fail);
    });
  }

  fetchUser(success, fail) {
    gapi.client.people.people.get({
      resourceName: 'people/me',
      'requestMask.includeField': 'person.email_addresses,person.names,person.photos,person.birthdays,person.genders'
    })
    .then(success, fail);
  }
}
