// payment.js
$('#save-payment').click(function() {
    const cardData = {
        method: selectedPaymentMethod || 'card',
        name: $('#card-name').val(),
        number: $('#card-number').val().replace(/\s/g,''),
        expiry: $('#expiry-date').val(),
        cvv: $('#cvv').val()
        // optional: lang: 'en'
    };

    $.ajax({
        url: 'http://localhost:3000/api/pay',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(cardData),
        success: function(response) {
            if (response && response.status === 'success') {
                alert('Payment simulation successful!');
                // update UI
                $('#payment-summary').show();
                $('#payment-details').hide();
            } else {
                // fallback success message if API uses different shape
                alert('Payment processed (unexpected response).');
            }
        },
        error: function(xhr) {
            const serverMsg = xhr && xhr.responseJSON && (xhr.responseJSON.message || xhr.responseJSON. الرسالة);
            const message = serverMsg || 'Payment failed. Please check your details and try again.';
            alert('Error: ' + message);
        }
    });
});
