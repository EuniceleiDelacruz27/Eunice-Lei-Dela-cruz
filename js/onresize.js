<script>
        function displayWindowsSize() {
           
           var w = window.outerWidth;
            var h = window.outerHeight;
            var txt = "Window size: width=" + w + ", height=" + h;
            documentgetElementById("result"),innerHTML = txt;
        }
        window.onresize = displayWindowsSize;
    </script>
