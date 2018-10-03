function readURL (input) {
    if (input.files && input.files[0]) {
        
        var reader = new FileReader();
        reader.onload = function (e) {
            jQuery(input).parent().prepend('<img src="'+e.target.result+'" style="width:auto; height:150px;" />');
            jQuery(input).parent().append('<input type="file" accept="image/*;capture=camera" onchange="readURL(this);" />');
            jQuery(input).hide();
        };
        reader.readAsDataURL(input.files[0]);
    }
}