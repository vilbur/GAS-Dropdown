/** 
 */

function alert(message)
{
  // Display a dialog box with a title, message, input field, and "Yes" and "No" buttons. The
  // user can also close the dialog by clicking the close button in its title bar.
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert(message);
  

}


/** GAS
 */
var Dropdown = (function()
{
  	var help_text_prefix	= 'Dropdown';
	var spread	= SpreadsheetApp.getActiveSpreadsheet();
	var sheet	= spread.getActiveSheet();
	var range_active	= spread.getActiveRange();
  
	/** 
	*/
	function Dropdown(  )
	{
      
      this.test_prop = "default"
      
      /** insertToActiveRange
      */
      this.test = function()
      {     
         var ui = SpreadsheetApp.getUi();
       // alert("Dropdown.test()");
        alert( this.test_prop );
   
      }
      
      
	}
	
	
	return Dropdown 
})();

