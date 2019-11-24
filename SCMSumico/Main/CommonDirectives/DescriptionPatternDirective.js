myApp.directive('descriptionpattern', function () {
    return {
        require: 'ngModel',
        link: function (scope, element) {
            $(element).on("input", function () {
                var txt = $(this).val();
                if (txt.includes('<') || txt.includes('>')) {
                    $(this).val(txt.replace('<', '').replace('>', ''));
                }
            });
            $(element).change(function () {
                var str = $(this).val();
                for (var i = 0; i < str.length; i++) {
          
                    if (str.charAt(i).includes('<') || str.charAt(i).includes('>')) {
                        str = str.replace(str.charAt(i), '+');
                    }
                }
                $(this).val(str);


            });
        }
    };
});
