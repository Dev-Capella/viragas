<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('../css/app.css') }}" rel="stylesheet">
    <link rel="icon" href="../images/icon.ico">
    <title>Vira Gas</title>
</head>

<body class="antialiased">
    <div id="root"></div>
</body>
<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>

</html>