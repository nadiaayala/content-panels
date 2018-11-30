$(function(){
    var $controllers = $('.accordion-control');
    var $tabs = $('.link-panel');
    
    // Code for the accordion
    $controllers.on('click', function(e){
        e.preventDefault();
        $(this).next('.accordion-content').not(':animated').slideToggle();
        });

    
//   Code for the tabbed panel
    $('.tabbed').each(function(){                   
        var $this = $(this);                            
        var $tab = $this.find('li.active');             // Selecting the current ul to find the active li inside it 
        var $link = $tab.find('a');                     // Get link from active tab
        var $panel = $($link.attr('href'));             // Get active panel using the href atribute of the link inside the current active li
      
        $this.on('click', '.tab-control', function(e) { 
          e.preventDefault();   
          $link.removeClass('selected');
          $link = $(this); // tab controller .tab-control clicked
          $link.addClass('selected');                      
              var id = this.hash;                          
           if (!$link.is('.active')) {             
            $panel.removeClass('active');    
            $tab.removeClass('active');                
            $panel = $(id).addClass('active'); 
            $tab = $link.parent().addClass('active'); 
           }
        })});
        

//   Code for the photo viewer
    var $photoViewer = $('#photo-viewer');
    var $imgHolder = $('.img-holder');
    var $thumbnails = $('.thumbnails');
    
    $thumbnails.on('click', '.thumb', function(){
        var $src = $(this).attr('src');
        console.log($src);
        var $showing = $('.showing');
        $showing.attr('src', $src);
        
    })

    });
