import { Component, OnInit } from '@angular/core';
import { AtletaService } from '../atleta.service';
import { Atleta } from '../atleta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Atletica } from './atletica.model';

@Component({
  selector: 'app-read-atleta',
  templateUrl: './read-atleta.component.html',
  styleUrls: ['./read-atleta.component.scss']
})
export class ReadAtletaComponent implements OnInit{

  img_atl:string="";
  icone_url:string="assets/normal.png";

  atleta: Atleta = {
    id: 0,
    cpf:"",
    name:"",
    rg:"",
    atleticaName: "",
    atleta_url: "",
    formado:false,
  };

  constructor(
    private service: AtletaService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
      this.atleta.id = this.route.snapshot.paramMap.get("id");
      this.findById();
      
      
  }

  cancel():void{
    this.router.navigate([`/`])
  }

  findById(): void{
    this.service.findById(this.atleta.id!).subscribe((resposta) => {
      console.log(resposta)
      this.atleta = resposta
      this.atleticaImg(this.atleta.atleticaName);
      if(resposta.formado == true){this.icone_url ="assets/formado.png"}
      
    }
    )
  }


  atleticaImg(id:any):void{
    switch(id){
      case "A.A.A Carneiro Leão":
        this.img_atl = "assets/odonto.png";
        break;
      case "A.A.A Casa Sete":
        this.img_atl = "assets/direito.png";
        break;
      case "A.A.A Flaviana Condeixa Favareto":
        this.img_atl = "assets/fea.png";
        break;
      case "A.A.A Lucien Lison":
        this.img_atl = "assets/filo.png";
        break;
      case "A.A.A Marina de Andrade Resende":
        this.img_atl = "assets/enf.png";
        break;
      case "A.A.A  Valdir Barbanti":
        this.img_atl = "assets/educa.png";
        break;
      case "A.A.A. Rocha Lima":
        this.img_atl = "assets/med.png";
        break;
      case "A.A.A XX de Janeiro":
        this.img_atl = "assets/farma.png";
        break;
      case "Liga Unificada da Saúde":
        this.img_atl = "assets/lus.png";
        break;
    }
  }


}
