var $form = $('#checkout-form');


$form.submit(function(event)) {
    $('#order-error').addClass('hidden');
    $form.find('button').prop('disabled', true);
    name: $('#name').val(),
    email: $('#email').val(),
    department: $('#department').val(),
    branch: $('branch').val();
    return false;
});
if(response.error){
    //show erros on the form
    $('#order-error').text(response.error.message);
    $('#order-error').removeClass('hidden');
    $form.find('button').prop('disabled', false); // re-enable submission
    else {
        $form.get(0).submit();
    }
}

