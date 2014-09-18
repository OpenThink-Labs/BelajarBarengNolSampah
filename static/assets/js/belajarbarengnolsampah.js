jQuery().ready(function (){
	$(".topmenu").unbind("click").bind("click", function(){
	  var menu = $(this).attr('id');
	  
	  if(menu == "video") {
		var html = "<h1 class='cover-heading'>Video Pembelajaran Keranjang Komposter Takakura</h1>"+
                   "<div class='col-sm-12' style='text-align:left'>"+
                   "<ol>"+
                   "<li><a href='#' class='menu_video' id='Mengolah_sampah_organik_secara_mandiri_Takakura_Home_Method.mp4' src='http://www.youtube.com/watch?v=OI41hdwgk60'>Mengolah Sampah Organik Secara Mandiri</a></li>"+
                   "<li><a href='#' class='menu_video' id='Pembuatan_Keranjang_Takakura.mp4' src='http://www.youtube.com/watch?v=iu2mfAmejvY'>Pembuatan Keranjang Komposter Takakura</a></li>"+
                   "</ol>"+
                   "</div>";
		$("#main_area").html(html);  
	  } else if(menu == "dokumen") {
	     var html = "<h1 class='cover-heading'>Dokumen Pembelajaran Keranjang Komposter Takakura</h1>"+
            "<div class='col-sm-12' style='text-align:left'>"+
            "<ol>"+
            "<li><a href='#' class='menu_dokumen' id='modul_pembuatan_kompos_metode_takakura.pdf' title_src='Bapelkes Cikarang' src='http://bapelkescikarang.or.id/bapelkescikarang/images/stories/KurmodTTG/pengelolaansampah/mi-5c%20modul%20pembuatan%20kompos%20metode%20takakura.pdf'>Modul Pembuatan Kompos dengan Metode Takakura</a></li>"+
            "</ol>"+
            "</div>";
	     $("#main_area").html(html);  
	  }
	  
	});
	
	$("body").on("click",".menu_video", function(){
       var file   = $(this).attr('id');
       var title  = $(this).html();
       var sumber = $(this).attr('src');
    	   
       var html = "<h1 class='cover-heading'>"+title+"</h1>"+
                  "<div class='col-sm-1'></div><div class='col-sm-10'><video src='assets/video/takakura/"+file+"' controls autoplay class='col-sm-12'></video>"+
                  "</div><div class='col-sm-1'></div>"+
                  "<div class='col-sm-6'><div class='pull-left'><button type='button' name='navigasi' id='kembali' class='btn btn-default'><i class='glyphicon glyphicon-arrow-left'></i> Kembali</button></div></div>"+
                  "<div class='col-sm-6'><div class='pull-right'>Sumber : <a href='"+sumber+"' target='new'>Youtube</a></div>";
       
       $("#main_area").html(html);  
	});
	
	$("body").on("click",".menu_dokumen", function(){
	       var file        = $(this).attr('id');
	       var title       = $(this).html();
	       var sumber      = $(this).attr('src');
	       var nama_sumber = $(this).attr('title_src');
	    	   
	       var html = "<h1 class='cover-heading'>"+title+"</h1>"+
	                  "<div class='embed-responsive embed-responsive-16by9'><object data='assets/dokumen/takakura/"+file+"' type='application/pdf' width='1000px' height='600px'></object>"+
	                  "</div>"+
	                  "<div class='col-sm-6'><div class='pull-left'><button type='button' name='navigasi' id='kembali' class='btn btn-default'><i class='glyphicon glyphicon-arrow-left'></i> Kembali</button></div></div>"+
	                  "<div class='col-sm-6'><div class='pull-right'>Sumber : <a href='"+sumber+"' target='new'>"+nama_sumber+"</a></div>";
	       
	       $("#main_area").html(html);  
		});	
	
	$("body").on("click","[name=navigasi]", function(){
		var navigasi = $(this).attr('id');
		
		if(navigasi == 'kembali') {
			cover();
		}
	});
});

function cover() {
	var html = "<h1 class='cover-heading'>Keranjang Komposter Takakura</h1>"+
    "<div class='col-sm-3'>"+
    "</div>"+
    "<div class='col-sm-6'>"+
      "<img src='assets/images/keranjang-komposter-takakura.jpg' class='img-responsive' alt='Keranjang Komposter Takakura'>"+
    "</div>"+
    "<div class='col-sm-3'>"+
    "</div>";            

	$("#main_area").html(html);  	
}