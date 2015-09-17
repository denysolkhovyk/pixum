$( document ).ready(function() {

    $.each(APP.data, function( index, value ) {
    	$("#list").append("<div id='"+value.albums_id+"' class='large-3 medium-3 small-12 columns album_block'>\
    	          <div class='grid_image large-12 medium-12 small-4'>\
    	            <img src='"+value.images[0]+"' class='overlay-slide-in'/>\
    	          </div>\
    	          <div class='panel large-12 small-8 panel_album'>\
    	            <h5>"+value.albums_name+"</h5>\
    	            <h6>"+value.images.length+ " Fotos \
    	              <span class='icons_status' title="+value.status+" data-name='"+value.status+"'>\
    	                <i class='fontIcon fontIcon-"+value.status+"'></i>\
    	              </span>\
    	            </h6>\
    	          </div>\
    	        </div>");
	});

    //Click in Album
	$(".album_block").on("click", function(e) {

		var id = $(e.target).closest(".album_block").attr("id");

		localStorage.setItem('id', id);

		document.location.href = "album_images.html";

	})

	function local_storage() {

		var storare_id = localStorage.getItem('id');

		var images = $.grep(APP.data, function(e){ 

			return e.albums_id == storare_id; 

		});

		images.map(function(item) {

			$("#album_name").text(item.albums_name);

			$("#album_name").next("img").attr("src", item.images[0]);

			item.images.map(function(src) {

				$("#album_images_list").append("<li class='test'><div class='block'><a href="+src+"></a><img class='test_img' src="+src+"></div></li>");

			});
			
		});
	}

	local_storage();

	// render the image in our view
	function renderImage(file) {

	  var reader = new FileReader();
	  reader.onload = function(e) {
	    the_url = e.target.result
	    // $("#album_images_list").append("<li><a href="+the_url+"><img src="+the_url+"></a></li>");
	    $("#album_images_list").append("<li class='test'><div class='block'><a href="+the_url+"></a><img class='test_img' src="+the_url+"></div></li>");
	  }
	  reader.readAsDataURL(file);
	}
 
	$("#upload_image").change(function() {
	    renderImage(this.files[0])
	});

});