<?php

class WC_Shipping_doprava_WEDO
extends WC_Shipping_Method{public function __construct($instance_id=0){
  $this->instance_id=absint($instance_id);
  $this->id='doprava_wedo';
  $this->method_title='WE|DO';$this->method_description=' Zákazníci si na mapě snadno a pohodlně vyberou nejbližší výdejní místo ONE POINT nebo ONE BOX.';
  $aktivace_wedo=get_option('wc_doprava_doprava_wedo');$this->enabled=$aktivace_wedo;
  $this->supports=array('shipping-zones','settings','instance-settings','instance-settings-modal',);
  $this->init();
}

function init(){$this->init_form_fields();$this->init_settings();
  $this->init_instance_form_fields();$this->init_instance_settings();
  $this->title=$this->get_option('wedo_nazev');
  add_action('woocommerce_update_options_shipping_'.$this->id,array($this,'process_admin_options'));
}

public function calculate_shipping($package=array()){$rate=array('id'=>$this->get_rate_id(),'label'=>$this->title,'cost'=>$this->get_option('wedo_zakladni-cena'),'package'=>$package,);
  $this->add_rate($rate);
}

public function init_form_fields(){
  $this->form_fields=array('op1'=>array('title'=>'ONE','label'=>'Zobrazení se ve widgetu výdejní místa ONE','type'=>'checkbox','default'=>'yes',),'op2'=>array('title'=>'ONE Boxy','label'=>'Zobrazovat ve widgetu ONE Boxy','type'=>'checkbox','default'=>'yes',));
}

public function init_instance_form_fields(){
  $this->instance_form_fields=array('wedo_nazev'=>array('title'=>'Název','type'=>'text','description'=>'Název pro zobrazení v eshopu.','default'=>'ONE','css'=>'width: 300px;'),'wedo_zakladni-cena'=>array('title'=>'Základní cena','type'=>'price','description'=>'Pokud nebude cena vyplněna, tak bude nulová.','default'=>'','css'=>'width: 100px;','placeholder'=>wc_format_localized_price(0)),);
}}
