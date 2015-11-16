var elixir = require('laravel-elixir');

elixir.config.assetsPath = '';
elixir.config.publicPath = '';
elixir.config.css.sass.folder = 'scss'

elixir(function(mix) {
  if(!elixir.config.production) {
    mix.sass('devicon.scss');
  } else {
    mix.sass('devicon.scss', 'css/devicon.min.css');
  }
});
