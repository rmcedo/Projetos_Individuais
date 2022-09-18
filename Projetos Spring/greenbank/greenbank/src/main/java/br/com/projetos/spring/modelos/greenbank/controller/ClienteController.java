package br.com.projetos.spring.modelos.greenbank.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.projetos.spring.modelos.greenbank.model.Cliente;
import br.com.projetos.spring.modelos.greenbank.model.ItemNivel3;
import br.com.projetos.spring.modelos.greenbank.repository.IClienteRepository;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping ("/cliente")

public class ClienteController {
	private final String PATH = "localhost:8080/cliente";
	
	@Autowired
	
	private IClienteRepository clienteRepository;
	
	@GetMapping("")
	@ResponseStatus(HttpStatus.OK)
	
	public List<Cliente> listAll(){
		
		List <Cliente> response = clienteRepository.findAll();
		
		response.forEach(cliente->{
			
			setMaturidadeNivel3(cliente);
		});
		return response;
		
		
	}
	
	
	
	
	
	private void setMaturidadeNivel3(Cliente cliente) {



		ArrayList<String> headers = new ArrayList();

		headers.add("Accept : application/json");

		headers.add("Content-type : application/json");



		ObjectMapper mapper = new ObjectMapper();

		mapper.setSerializationInclusion(Include.NON_NULL);

		try {

		cliente.setLinks(null);

		String nomeAtual = cliente.getNome();

		cliente.setNome("Nome diferente");

		String jsonUpdate = mapper.writeValueAsString(cliente);

		cliente.setNome(nomeAtual);

		cliente.setId(null);

		String jsonCreate = mapper.writeValueAsString(cliente);

		cliente.setLinks(new ArrayList<>());

		cliente.getLinks().add(new ItemNivel3("GET", PATH, null, null));

		cliente.getLinks().add(new ItemNivel3("GET", PATH + "/" + cliente.getId(), null, null));

		cliente.getLinks().add(new ItemNivel3("POST", PATH, headers, jsonCreate));

		cliente.getLinks().add(new ItemNivel3("PUT", PATH + "/" + cliente.getId(), headers, jsonUpdate));

		} catch (JsonProcessingException e) {

		e.printStackTrace();

		}



		}
}


