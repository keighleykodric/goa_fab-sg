// A $( document ).ready() block.

( function( window, undefined ) {

  // normally variables & functions start with a lowercase letter but with modules, that is not the case.
  // The general tradition is to start them with a capital letter instead.
  function MyModule() {

    // `this` refers to the instance of `MyModule` when created
    this.myMethod = function myMethod() {
      alert( 'my method' );
      console.log( "window loaded Bitches" );
    };

    // note that we still use a function declaration even when using a function expression.
    // for more information on why, check out: http://kangax.github.io/nfe/
    this.myOtherMethod = function myOtherMethod() {
      alert( 'my other method' );
    };

  }

  // expose access to the constructor
  window.MyModule = MyModule;

} )( window );

// example usage
var myModule = new MyModule();
myModule.myMethod(

    (function(){
    $('.Switch').on('click', function(event){
      event.preventDefault();
      $(this).toggleClass('active');
    });
  });
); // alerts "my method"
myModule.myOtherMethod(); // alerts "my other method"





var Module = (function () {

  var _privateMethod = function () {
    // private stuff
  };

  var publicMethod = function () {
    _privateMethod();
  };

  return {
    publicMethod: publicMethod
  };

})();






(function() {
   $('.dropdown').change(function(){
      $(".element").attr( "class", $(this).find('option:selected').data('class')+ " element");
  });
});






var classList = document.getElementById('divId').className.split(/\s+/);
for (var i = 0; i < classList.length; i++) {
    if (classList[i] === 'switch') {
        //do something
        console.log( "window loaded Sitches" );
    }
}








(function() {

    // Switch Click
		$('.Switch').click(function() {

			// Check If Enabled (Has 'On' Class)
			if ($(this).hasClass('On')){

				// Try To Find Checkbox Within Parent Div, And Check It
				$(this).parent().find('input:checkbox').attr('checked', true);

				// Change Button Style - Remove On Class, Add Off Class
				$(this).removeClass('On').addClass('Off');

			} else { // If Button Is Disabled (Has 'Off' Class)

				// Try To Find Checkbox Within Parent Div, And Uncheck It
				$(this).parent().find('input:checkbox').attr('checked', false);

				// Change Button Style - Remove Off Class, Add On Class
				$(this).removeClass('Off').addClass('On');

			}

		});

		// Loops Through Each Toggle Switch On Page
		$('.Switch').each(function() {

			// Search of a checkbox within the parent
			if ($(this).parent().find('input:checkbox').length){

				// This just hides all Toggle Switch Checkboxs
				// Uncomment line below to hide all checkbox's after Toggle Switch is Found
				 $(this).parent().find('input:checkbox').hide();

				// For Demo, Allow showing of checkbox's with the 'show' class
				// If checkbox doesnt have the show class then hide it
				if (!$(this).parent().find('input:checkbox').hasClass("show")){ $(this).parent().find('input:checkbox').hide(); }
				// Comment / Delete out the above line when using this on a real site

				// Look at the checkbox's checkked state
				if ($(this).parent().find('input:checkbox').is(':checked')){

					// Checkbox is not checked, Remove the 'On' Class and Add the 'Off' Class
					$(this).removeClass('On').addClass('Off');

				} else {

					// Checkbox Is Checked Remove 'Off' Class, and Add the 'On' Class
					$(this).removeClass('Off').addClass('On');

				}

			}

		});

	});


  (function(){
  $('.Switch').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');
  });
});



(function() {
    // Switch toggle
    ('.Switch').click(function() {
        $(this).toggleClass('On').toggleClass('Off');
    });
});
