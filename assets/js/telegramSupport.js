$(document).ready(function () {
    $.ajax({
        url: URL + "/getTelegramSupport",
        method: "get",
        dataType: "json",
        success: function (data) {
            console.log(data)
            document.querySelector('#support-link').href = 'https://t.me/' + data;
        },
    });
});
