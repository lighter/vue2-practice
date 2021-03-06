<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel</title>
</head>

<body>
  <div id="root">
    <ul>
      <li v-for="skill in skills" v-text="skill"></li>
    </ul>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script type="application/javascript" src="{{ elixir('/js/app.js') }}"></script>
</body>

</html>