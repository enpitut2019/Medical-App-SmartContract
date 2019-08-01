$(function () {
    $("button[name='size']").on("click", function (e) {
        e.preventDefault();
        var source = $('#name').val() + ',' + $('#country').val() + ',' + $('#language').val() + ',' + $('#destination').val() + ','
            + $('#work place').val() + ',' + $('#length of stay').val() + ',' + $('#medical insurance').val() + ','
            + $('#method of paymnt').val() + ',' + $('#religious requests').val() + ',' + $('#emergency contact').val() + ',' +
            $('#acquaintance').val() + ',' + $('#others').val() + ',';
        source = Encoding.convert(source, 'SJIS');

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
});