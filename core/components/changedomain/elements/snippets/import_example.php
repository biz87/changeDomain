<?php
/**
 * Created by PhpStorm.
 * User: nikolaysavin
 * Date: 2/5/19
 * Time: 6:06 PM
 */

$client = $modx->getService('client', 'rest.modRestCurlClient');

if (!$changeDomain = $modx->getService('changedomain', 'changeDomain', $modx->getOption('changedomain_core_path', null,
        $modx->getOption('core_path') . 'components/changedomain/') . 'model/changedomain/', array())
) {
    return 'Could not load changeDomain class!';
}


 $domains = array(
     array(
         'domain' => 'example-tambov.ru',
         'city' => 'Тамбов'
     ),

 );

foreach($domains as $domain){
    $xmlstring = $client->request('https://ws3.morpher.ru/russian/declension', '/', 'GET', $params = array('s'  => $domain['city']), array());

    $xml = simplexml_load_string($xmlstring, "SimpleXMLElement", LIBXML_NOCDATA);
    $json = json_encode($xml);
    $padeji = json_decode($json,TRUE);
    unset($padeji['множественное']);
    echo '<pre>';
    //print_r($padeji);
    $data = array(
        'domain' => $domain['domain'],
        'name' =>  $domain['city'],
        'maps' => '56.331693, 36.728716',
        'name_rp' => $padeji['Р'],
        'name_dp' => $padeji['Д'],
        'name_vp' => $padeji['В'],
        'name_tp' => $padeji['Т'],
        'name_pp' => $padeji['П'],
        'address' => "г. {$domain['city']}, ул. Ленина 4, оф 302",
        'phone' => '+7 (777) 777-44-55',
        'email' => "info@{$domain['domain']}",
    );
    print_r($data);

    $q = $modx->newObject('changeDomainItem');
    $q->fromArray($data);
    $q->save();
}




