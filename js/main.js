$(".btnclps").click(() => {
    $(".collapse.show").toggleClass("show")
    $(".dayselected").replaceWith("")
});

$('form').on('submit', function (e) {
    console.log("Last saved: " + Date())
    $.ajax({
        type: 'post',
        url: "admin/saveini.php",
        data: $(this).serialize(),
    })
    .done($(".daysuccessalert").html("ini file was updated successfully"));
    e.preventDefault();

});
