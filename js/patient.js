$(function () {
    $("button[name='size']").on("click", function (e) {
        e.preventDefault();
        var source = $('#name').val() + ',' + $('#country').val() + ',' + $('#language').val() + ',' + $('#destination').val() + ',' + $('#work_place').val() + ',' + $('#length_of_stay').val() + ',' + $('#medical_insurance').val() + ',' + $('#method_of_paymnt').val() + ',' + $('#religious_requests').val() + ',' + $('#emergency_contact').val() + ',' + $('#acquaintance').val() + ',' + $('#others').val();
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