const qr_image = document.querySelector('#QR-image');
const image_box = document.querySelector('#image-box');
const input_field=document.querySelector("#input-field")

function generate(){
    qr_image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input_field.value;
}
