export default class Facebook {
  constructor() {
    window.fbAsyncInit = function() {
      FB.init({
        appId   : config.FACEBOOK_APP_ID,
        cookie  : true,
        xfbml   : true,
        version : 'v2.12'
      });
      FB.AppEvents.logPageView();
    };
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  login(success, fail) {
    FB.login(function(response) {
      if (response.authResponse) {
         FB.api('/me', { locale: 'en_US', fields: 'first_name, last_name' }, success);
      } else {
        fail();
      }
    }, { scope: 'email' });
  }
}
