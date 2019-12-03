/*

this uses a custom render test thing

file: css/button.css
```
#id{
    width: 96px;
    height: 48px;
    font-size: 24px;
}
```

file: js/button.js
```
function changeValue(){
    var b=document.getElementById('btn');

    b.style.width='96px';
    b.style.height='48px';
    b.style.fontSize='24px';

    var n = parseInt(b.value)
    b.value = n+1;
}

var b=document.getElementById('btn');
b.style.width='96px';
b.style.height='48px';
b.style.fontSize='24px';
```

file: index.html
```
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>

    <body>
        <input type="button" id="btn" onclick="changeValue();" value="0" />
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html>
```

submissions: https://www.hackerrank.com/challenges/js10-create-a-button/submissions
pass case: https://www.hackerrank.com/challenges/js10-create-a-button/submissions/design/132822107

*/
