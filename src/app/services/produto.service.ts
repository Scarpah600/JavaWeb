import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { ProdutoDTO } from "../../models/produto.dto";




@Injectable()
export class ProdutoService {

    constructor(public http: HttpClient) {
    }

    findByCategoria(categorias_id: string)  {
        return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categorias_id}`);
    }
    findById(produtos_id : string){
        return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${produtos_id}`);
    }
}