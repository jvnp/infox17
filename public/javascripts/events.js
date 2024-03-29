window.addEventListener('resize', function() {
    "use strict";
    window.location.reload();
});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid white}";
    document.body.appendChild(css);
};

function showDisplay() {
    document.getElementById('myInput').style.borderColor = "cyan";
}

function f() {
    var i, li, table;
    table = document.getElementById("card-container");
    li = table.getElementsByClassName("card");
    for (i = 0; i < li.length; ++i)
        li[i].style.display = "";
}

function f1() {
    var i, li, table;
    table = document.getElementById("card-container");
    li = table.getElementsByClassName("card");
    for (i = 0; i < li.length; ++i) {
        if (li[i].id == '1' || li[i].id == '2' || li[i].id == '3' || li[i].id == '4') {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function f2() {
    var i, li, table;
    table = document.getElementById("card-container");
    li = table.getElementsByClassName("card");
    for (i = 0; i < li.length; ++i) {
        if (li[i].id == '5' || li[i].id == '6' || li[i].id == '7' || li[i].id == '8') {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function f3() {
    var i, li, table;
    table = document.getElementById("card-container");
    li = table.getElementsByClassName("card");
    for (i = 0; i < li.length; ++i) {
        if (li[i].id == '9' || li[i].id == '10' || li[i].id == '11' || li[i].id == '12') {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function f4() {
    var i, li, table;
    table = document.getElementById("card-container");
    li = table.getElementsByClassName("card");
    for (i = 0; i < li.length; ++i) {
        if (li[i].id == '13' || li[i].id == '14' || li[i].id == '15' || li[i].id == '16') {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function f5() {
    var i, li, table;
    table = document.getElementById("card-container");
    li = table.getElementsByClassName("card");
    for (i = 0; i < li.length; ++i) {
        if (li[i].id == 1 || li[i].id == 2 || li[i].id == 3 || li[i].id == 4) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction() {
    // Declare variables
    var input, filter, table, li, p, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("card-container");
    li = table.getElementsByClassName("card");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByClassName("card-title")[0];
        if (p) {
            if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}

$(document).ready(function() {

    $(window).scroll(function() {
        // $('#card-container').css({top:});
    });

});