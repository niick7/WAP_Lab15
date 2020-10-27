$(function (){
    $("input[name='animal']").click(function (){
        const value = $("input[name='animal']:checked").val();
        $.get("http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php", {
            animal: value
        }).done(function(data){
            $("#pictures").html(data);
            $("#pictures img").each(function(){
                const src = $(this).attr('src');
                $(this).attr('src', 'http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/' + src)
            })
        })
    });
})