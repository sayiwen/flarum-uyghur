<?php

namespace Sayiwen\FlarumUyghur\Listener;

use Flarum\Frontend\Document;
use Flarum\Locale\LocaleManager;
use Illuminate\Contracts\Events\Dispatcher;

class ChangeDirection
{
    public function __invoke(Document $view)
    {
  		$locales = app(LocaleManager::class);

        if ($locales->getLocale() == 'ug'){
            $view->language = 'ug';
            $view->direction = 'rtl';
        }
    }
}