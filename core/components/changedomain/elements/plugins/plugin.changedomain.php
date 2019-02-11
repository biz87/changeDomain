<?php
/** @var modX $modx
 * @var changeDomain $changeDomain
 *
 */


if (!$changeDomain = $modx->getService('changedomain', 'changeDomain', $modx->getOption('changedomain_core_path', null,
        $modx->getOption('core_path') . 'components/changedomain/') . 'model/changedomain/', $scriptProperties)
) {
    return 'Could not load changeDomain class!';
}

switch ($modx->event->name) {

    case 'OnManagerPageBeforeRender':

        $controller->changeDomain = $changeDomain = $modx->getService('changedomain', 'changeDomain', $modx->getOption('changedomain_core_path', null,
                $modx->getOption('core_path') . 'components/changedomain/') . 'model/changedomain/', $scriptProperties);

        $controller->changeDomain->loadJsCss();
        break;


    case 'OnLoadWebDocument':

        // Извлекаем имя хоста из URL
        if($_SERVER['HTTPS']){
            preg_match('@^(?:https://)?([^/]+)@i',$_SERVER['HTTP_HOST'], $matches);
        }else{
            preg_match('@^(?:http://)?([^/]+)@i',$_SERVER['HTTP_HOST'], $matches);
        }

        $host = $matches[1];

        // извлекаем две последние части имени хоста
        // preg_match('/[^.]+\.[^.]+$/', $host, $matches);
        // $domain = $matches[0];
        $response = $changeDomain->checkHost($host, $modx->resource->get('id'));
        if($response['status'] == 'success'){
            if($_SESSION['domain']){
                unset($_SESSION['domain']);
            }
            $_SESSION['domain'] = $response['response'];
            foreach($_SESSION['domain']['values'] as $key=>$value){
                $modx->setPlaceholder('chd_'.$key, $value);
            }
        }else{
            $q = $modx->newQuery('changeDomainItem');
            $q->limit(1);
            $q-> where(array('main_domain' => 1));
            $item = $modx->getObject('changeDomainItem', $q);
            if(!$item){
                $q = $modx->newQuery('changeDomainItem');
                $q->limit(1);
                $q->sortby('id');
                $item = $modx->getObject('changeDomainItem', $q);
                if(!$item){
                    return;
                }
            }

            $response = $changeDomain->checkHost($item->domain, $modx->resource->get('id'));
            if($response['status'] == 'success'){
                if($_SESSION['domain']){
                    unset($_SESSION['domain']);
                }
                $_SESSION['domain'] = $response['response'];
                foreach($_SESSION['domain']['values'] as $key=>$value){
                    $modx->setPlaceholder('chd_'.$key, $value);
                }
            }
        }
        break;

}