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
    public function criar_clie(Cliente $cliente);
    public function deletar_clie(Cliente $id);
    public function editar_cliente(Cliente $cliente);
    public function findByEmail($email);

  }