
$(document).ready(function () {
    $('.money').on('input keydown keyup mousedown mouseup select contextmenu drop', function () {
        if (this.value.length == 0 || MoneyFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
    });
    function MoneyFilter(value) {
        return /^[1-9]\d*\.?\d*$/.test(value);
    }
    $('.numeric').on('input keydown keyup mousedown mouseup select contextmenu drop', function () {
        if (this.value.length == 0 || NumericFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
    });
    function NumericFilter(value) {
        return /^[1-9]\d*$/.test(value);
    }
    function CreditCardFilter(value) {
        return /^[0-9\-]*$/.test(value);
    }
    $('.phone').on('input keydown keyup mousedown mouseup select contextmenu drop', function () {
        if (this.value.length == 0 || (NumericFilter(this.value) && this.value[0] == '5' && this.value.length < 11)) {
            this.beforeValue = this.unchangeValue;
            this.unchangeValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("beforeValue")) {
            this.value = this.beforeValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
    });
    function PhoneFilter(value) {
        return /^5\d{0,9}$/.test(value);
    }
    function CreditCardFilter(value) {
        return /^[0-9\-]*$/.test(value);
    }

    $('.postCode').on('input keydown keyup mousedown mouseup select contextmenu drop', function () {
        if (this.value.length == 0 || NumericFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
    });
    function NumericFilter(value) {
        return /^\d*$/.test(value);
    }
    $('.letter').on('input keydown keyup mousedown mouseup select contextmenu drop', function () {
        if (this.value.length == 0 || LetterFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
    });
    function LetterFilter(value) {
        return /^[A-Za-zğĞüÜİışŞöÖçÇ\ ]*$/.test(value);
    }
    $('.alphanumeric').on('input keydown keyup mousedown mouseup select contextmenu drop', function () {
        if (this.value.length == 0 || AlphaNumericFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
    });
    function AlphaNumericFilter(value) {
        return /^[A-Za-zğĞüÜİışŞöÖçÇ\d\ ]*$/.test(value);
    }
    $('.email').on('input keydown keyup mousedown mouseup select contextmenu drop', function () {
        if (this.value.length == 0 || EmailFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
        }
    });
    function EmailFilter(value) {
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(value);
    }
    $('.password').on('input keydown keyup mousedown mouseup select contextmenu drop', function () {
        if (this.value.length == 0 || PasswordFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
    });
    function PasswordFilter(value) {
        return /^[\d\wğĞüÜİışŞöÖçÇ._\-\*]*$/.test(value);
    }
    $('.bigchars').on('input keydown keyup mousedown mouseup select contextmenu drop', function () {
        if (this.value.length == 0 || BigcharsFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
    });
    function BigcharsFilter(value) {
        return /^[\d\wğĞüÜİışŞöÖçÇ._\-\*/?:#\+&%()\ \r\n\t]*$/.test(value);
    }


    $('.card-mask').mask('0000 0000 0000 0000', {
        placeholder: '____ ____ ____ ____'
    });


});

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}

focusMethod = function getFocus() {
    var test = document.getElementById("test").length;
    if (test == 3) {
        document.getElementById("myTextField").focus();
    }
}

function validateForm() {
    var date = new Date();
    var exMonth = document.getElementById("exMonth").value;
    var exYear = document.getElementById("exYear").value;
    var month = date.getMonth();
    var year = date.getFullYear();
    if (year > exYear || (year == exYear && month >= exMonth)) {
        alert("Şuan ki tarihten eski bir tarih seçemezsiniz");
        return false;
    }
    return true;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    alert('test');
    return re.test(String(email).toLowerCase());
}



function disabledButton() {
    var abonenosu = document.getElementById("aboneNo").value;
    if (jQuery.isNumeric(abonenosu)) {
        $('#sorgu').on('click')
        $(this).removeClass('active').addClass('out');
        setTimeout(function () {
            $('#sorgu').hide()
        }, 0);
        $('#load_icon').removeClass('d-none');
    }
}
function disabledButton2() {
    $('#ode').on('click')
    $(this).removeClass('active').addClass('out');
    setTimeout(function () {
        $('#ode').hide()
    }, 0);
    $('#load_icon').removeClass('d-none');
}

function checkAboneNo() {
    var abonenosu = document.getElementById("aboneNo").value;
    if (jQuery.isNumeric(abonenosu)) {
        return true;
       
    }
    else {
        alert("Lütfen numara alanına rakam giriniz !");
        return false;
    }
}
