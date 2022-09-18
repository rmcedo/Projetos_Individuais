package br.com.projetos.spring.modelos.greenbank.model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name="gbdata")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Cliente extends MaturidadeNivel3Richardson{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Integer id;
	private String nome;
	private String cpf;
	private String contaCorrente;
	private String agencia;
	public Cliente(ArrayList<ItemNivel3> links, Integer id, String nome, String cpf, String contaCorrente,
			String agencia) {
		super(links);
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.contaCorrente = contaCorrente;
		this.agencia = agencia;
	}
	public Cliente(ArrayList<ItemNivel3> links) {
		super(links);
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getContaCorrente() {
		return contaCorrente;
	}
	public void setContaCorrente(String contaCorrente) {
		this.contaCorrente = contaCorrente;
	}
	public String getAgencia() {
		return agencia;
	}
	public void setAgencia(String agencia) {
		this.agencia = agencia;
	}
	
	

}
