<?php

class WC_Shipping_doprava_GLS
extends WC_Shipping_Method{public function __construct($instance_id=0){
  $this->instance_id=absint($instance_id);
  $this->id='doprava_gls';
  $this->method_title='GLS';
  $this->method_description=' Zákazníci si na mapě snadno a pohodlně vyberou nejbližší výdejní místo GLS v České republice nebo na Slovensku.';
  $aktivace_gls=get_option('wc_doprava_doprava_gls');
  $this->enabled=$aktivace_gls;
  $this->supports=array('shipping-zones','settings','instance-settings','instance-settings-modal',);
  $this->init();
}

function init(){
  $this->init_form_fields();
  $this->init_settings();
  $this->init_instance_form_fields();
  $this->init_instance_settings();
  $this->title=$this->get_option('gls_nazev');

  add_action('woocommerce_update_options_shipping_'.$this->id,array($this,'process_admin_options'));
}

public function calculate_shipping($package=array()){
  $rate=array('id'=>$this->get_rate_id(),'label'=>$this->title,'cost'=>$this->get_option('gls_zakladni-cena'),'package'=>$package,);
  $this->add_rate($rate);
}

public function init_form_fields(){
  $this->form_fields=array('op1'=>array('title'=>'GLS Slovensko','label'=>'Zobrazí se ve widgetu pouze výdejní místa GLS na Slovensku.','type'=>'checkbox','default'=>'no',),);
}

public function init_instance_form_fields(){
  $this->instance_form_fields=array('gls_nazev'=>array('title'=>'Název','type'=>'text','description'=>'Název pro zobrazení v eshopu.','default'=>'GLS','css'=>'width: 300px;'),'gls_zakladni-cena'=>array('title'=>'Základní cena','type'=>'price','description'=>'Pokud nebude cena vyplněna, tak bude nulová.','default'=>'','css'=>'width: 100px;','placeholder'=>wc_format_localized_price(0)),);
}}
