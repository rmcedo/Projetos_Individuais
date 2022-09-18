package br.com.projetos.spring.modelos.greenbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.projetos.spring.modelos.greenbank.model.Cliente;

public interface IClienteRepository extends JpaRepository<Cliente, Integer> {

}
