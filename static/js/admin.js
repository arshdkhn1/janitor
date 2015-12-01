// Copyright © 2015 Jan Keromnes. All rights reserved.
// The following code is covered by the AGPL-3.0 license.


// Alpha version invite form.

ajaxForm('#invite-form', 'invite', function (form, data) {

  var status = 'error';
  var message = data.message;

  switch (data.status) {
    case 'already-invited':
      status = 'success';
      message = 'This person is already invited';
      break;
    case 'invited':
      status = 'success';
      message = 'Invite sent!';
      break;
  }

  updateFormStatus(form, status, message);

});


// New project form.

ajaxForm('#newproject-form', 'projectdb', function (form, data) {

  var status = 'error';
  var message = data.message;

  switch (data.status) {
    case 'success':
      status = 'success';
      message = 'Project added!';
      document.location.reload();
      break;
  }

  updateFormStatus(form, status, message);

});