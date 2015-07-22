//Problem: Need a custome date picker for Spectrum Sites:: 
//Solution: Create one. (Duh). 


//1.) Hide cal-divs on pages  
      

(function($) {
    
    var defaults = {
        //wrapper : '#cal',
        position: '', 
    };
    
    $.fn.spectrumDatePick = function(opts) {
         
        // Establish our default settings
        var $this = $(this);
        //get options and assign to 'o'; 
        var o = $.extend({}, defaults, opts);
          
        //private functions:: 
        //1.init: 
        //var wrap = o.wrapper; 
        function init(){ 
          //init function with wrapper OR defaut wrap as a parameter: 
          //1.1 --> Create basic structure of cal. 
            console.log('calendar inited');
            //hide the div by default::
            $this.hide(); 
            //append the default structure:: 
            $this.append('<div id="cal"><div class="header"></div><table id="days"></table><div id="cal-frame"></div></div>').find(".header").html( '<span class="left button" id="prev"> &lang; </span><span class="month-year" id="label"> June 2010 </span><span class="right button" id="next"> &rang; </span>'); 
            $this.find("#days").html( '<tr> <td>sun</td> <td>mon</td> <td>tue</td> <td>wed</td> <td>thu</td> <td>fri</td> <td>sat</td> </tr>')
            $this.find("#cal-frame").html( '<table class="curr"><tr><td class="nil"></td><td class="nil"></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td class="today">11</td><td>12</td></tr><tr><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td></tr><tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr><tr><td>27</td><td>28</td><td>29</td><td>30</td><td class="nil"></td><td class="nil"></td><td class="nil"></td></tr></table>'); 
         } 

        //return calendars:: 
        console.log($this); 
        return this.each( function() {
            //call the init function:: 
            init(); 
            var selector = $this.selector
            //show the calendar on click
                $(o.position).focus( function(){ 
                    console.log(o.position + ' was focused on'); 
                    $(selector).show();
                    $(selector).on('click', 'td', function(){ 
                        console.log( $this.selector + 'date clicked'); 
                        //something happens to capture the date parameters and returns a value:: 
                        $this.hide(); 
                    }); 
                //Issue with blur --> will stop the code before date-clicked is called.
                //Only needs to leave function is something other than #cal1 or #cal2 is clicked, 
                //Could do a not selector? Pick up in the morning.
                }); 
                
               
                //selector.focus not working:: 
            //'td' click function. use to pass data to input. 
           
            
            console.log(o.position); 
            
        });
         

    }

}(jQuery));

