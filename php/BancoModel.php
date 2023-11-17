<?php

  class Banco {

    public $id;
    public $nome;
    public $email;
    public $Senha;
   
    
    //vou fazer depois dos problemas principais estiverem resolvidos
    // public $token;

  }

  interface BancoInterface {


    public function Const_cliente($cliente);
    public function criar_clie(Banco $cliente);
    public function deletar_clie(Banco $id);
    public function editar_cliente(Banco $cliente);
    public function findByEmail($email);

  }