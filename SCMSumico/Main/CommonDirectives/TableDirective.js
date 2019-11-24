myApp.directive('tablefixedrow', [function () {
    return {
        restrict: 'C',
        //scope: {
        //    scrollableWidth: '@scrollablewidth'
        //},
        link: function () {
            /* adding css class to html elements of table */
            var table = document.getElementById('table-scrollable');
            var head = table.getElementsByTagName('thead')[0];
            var body = document.getElementsByTagName('tbody')[0];
            var th = head.getElementsByTagName('th');
            var thFirstChild = head.getElementsByTagName('th')[0];
            var td = body.getElementsByTagName('td');
            table.classList.add('table-scrollable');
            head.classList.add('table-scrollable-head');
            body.classList.add('table-scrollable-body');
            for (var i = 0; i < th.length; i++) {
                th[i].classList.add('table-scrollable-head-th');
            }
            for (var i = 0; i < td.length; i++) {
                td[i].classList.add('table-scrollable-body-td');
            }
            thFirstChild.classList.add('table-scrollable-head-thfirst');
            for (var i = 0; i < body.childElementCount; i++) {
                var tdFirstChild = body.getElementsByTagName('tr')[i].getElementsByTagName('td')[0];
                tdFirstChild.classList.add('table-scrollable-body-tdfirst');
            }

            /* calculate width of cells and set widest cell's width to another cells width */
            var rowNum = body.childElementCount;
            var colNum = body.getElementsByTagName('tr')[0].getElementsByTagName('td').length;
            var trHead = head.getElementsByTagName('tr');
            var trBody = body.getElementsByTagName('tr');
            var tdWidth;
            var tdHeight;

            // we want to get width of cells in every column and calculate max of them
            for (var i = 0; i < colNum; i++) {
                for (var j = 0; j < rowNum; j++) { // getting width
                    var tdTarget = trBody[j].getElementsByTagName('td')[i];
                    tdWidth = tdTarget.clientWidth;
                }
                if (trHead[0].getElementsByTagName('th')[i].clientWidth > tdWidth) { // getting max width
                    tdWidth = trHead[0].getElementsByTagName('th')[i].clientWidth;
                }
                for (var j = 0; j < rowNum; j++) { // setting max width for all body cells in target column
                    var tdBodyFinalWidth = trBody[j].getElementsByTagName('td')[i];
                    tdBodyFinalWidth.style.minWidth = tdWidth + 'px';
                }
                // setting max width for the head cell in target column
                var tdHeadFinalWidth = trHead[0].getElementsByTagName('th')[i];
                tdHeadFinalWidth.style.minWidth = tdWidth + 'px';
            }

            for (var i = 0; i < rowNum; i++) {
                var firstTdBodyHeight = trBody[i].clientHeight;
                trBody[i].getElementsByTagName('td')[0].style.minHeight = firstTdBodyHeight + 'px';
            }

            /* display horizontal and vertiacl scrolling */
            $(document).ready(function () {
                $('.table-scrollable-body').scroll(function (e) { //detect an scroll event on the tbody
                    /*
                    Setting the thead left value to the negative valule of tbody.
                    scrollLeft will make it track the movement of the tbody element.
                    Setting an elements left value to that of the tbody.
                    scrollLeft left makes it maintain.
                    it's relative position at the left of the table.    
                    */
                    $('.table-scrollable-head').css("left", -$(".table-scrollable-body").scrollLeft()); //fix the thead relative to the body scrolling
                    $('.table-scrollable-head-thfirst').css("left", $(".table-scrollable-body").scrollLeft()); //fix the first cell of the header
                    $('.table-scrollable-body-tdfirst').css("left", $(".table-scrollable-body").scrollLeft()); //fix the first column of tdbody
                })
            })

            /* stying width of table in desktop size with input parameter of the directive */
            //if (document.body.clientWidth > 767) {
            //    document.getElementsByClassName('table-scrollable')[0].style.width = scope.scrollableWidth;
            //    document.getElementsByClassName('table-scrollable-head')[0].style.width = scope.scrollableWidth;
            //    document.getElementsByClassName('table-scrollable-body')[0].style.width = scope.scrollableWidth;
            //}
        }
    }
}])