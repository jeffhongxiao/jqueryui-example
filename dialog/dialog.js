'use strict';

$( function() {
    // var $name = $( "#name" );
    // var $email = $( "#email" );
    // var $password = $( "#password" );
    // var $allFields = $( [] ).add( name ).add( email ).add( password );

  function genAddUser(username) {
    var foo = function() {
      var valid = true;
      // $allFields.removeClass( "ui-state-error" );

      // $name.val(username);

      if ( valid ) {
        console.log("username = " + username);
        $dialog.dialog( "close" );
      }
      return valid;
    };
    return foo;
  }

  var $dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    title: "Current User is: " + $("#username").text(),
    buttons: {
      "Create an account": function() {
        var addUser = genAddUser($(this).data('username'));
        addUser();
      },
      Cancel: function() {
        console.log("username is: " + $(this).data('username'));
        $dialog.dialog( "close" );
      }
    },
    close: function() {
      form[ 0 ].reset();
//      allFields.removeClass( "ui-state-error" );
    }
  });


  var form = $dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var addUser = genAddUser('Test User 2');
    addUser();
  });

  $( "#create-user" ).button().on( "click", function() {
    $dialog.data('username', $("#username").text()).dialog( "open" );
  });
} );
