package br.com.projetos.spring.modelos.greenbank.model;

import java.util.ArrayList;

public class MaturidadeNivel3Richardson {
	
	ArrayList<ItemNivel3> links;

	public MaturidadeNivel3Richardson(ArrayList<ItemNivel3> links) {
		super();
		this.links = links;
	}

	public MaturidadeNivel3Richardson() {
		this.links=new ArrayList<>();
	}

	public ArrayList<ItemNivel3> getLinks() {
		return links;
	}

	public void setLinks(ArrayList<ItemNivel3> links) {
		this.links = links;
	}
	
	
	

}
