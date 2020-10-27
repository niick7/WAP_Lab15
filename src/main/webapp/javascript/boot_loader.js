$(function (){
    $("#loading").hide();
    $(document).ajaxStart(function (){
                    $("#loading").show();
                })
               .ajaxStop(function (){
                    $("#loading").hide();
               });
    $("#load").click(function (){
        $.get("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/loader.php", {
        }).done(function (data){
            $("#boot").html(data);
        })
    });
})