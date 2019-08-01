$(function () {
    $("button[name='size']").on("click", function (e) {
        e.preventDefault();
        var source = Encoding.convert($('#value').val(), 'SJIS')

        try {
            $('#qrcode').html("").qrcode({
                width: 200,
                height: 200,
                text: source,
            });
        } catch (e) {
            $('#qrcode').html("").append("文字数オーバーです：<br>" + e);
        }
    })
})