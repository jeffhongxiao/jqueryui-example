'use strict';

$( function() {
  function genAddUser(username) {
    var foo = function() {
      console.log("username = " + username);
      $dialog.dialog( "close" );
    };
    return foo;
  }

  var $dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 600,
    width: 800,
    resizable: false,
    draggable: false,
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
    }
  });


  var form = $dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var addUser = genAddUser('Test User 2');  // XXX what use is this?
    addUser();
  });

  $(".start").click(function() {
    $(this).text("Enabled");
    $(this).removeClass("btn-primary").addClass("btn-success");
  });

  $(".stop").click(function() {

    var $start = $(this).siblings(".start");
    $start.text("Start");
    $start.prop("disabled", true);

    $(this).text("Stopped");
  })

  $( "#create-user" ).button().on( "click", function() {
    $dialog.data('username', $("#username").text()).dialog( "open" );
  });
} );
