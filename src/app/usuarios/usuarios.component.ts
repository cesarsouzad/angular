import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private myService: MyService) { 
  }


  confirmodal: boolean = false;
  confirma: boolean = true;
  user: any = [];
  usuarioclick: any = [];
  cartao: any = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  numerocard: any = [];

  usuarios: any[] = [];
  corpo: any = {

  }
  confirmado: boolean = true;
  close: boolean = false;
  value: any;

  async ngOnInit() {
    await this.myService.getData() .subscribe( (data) => {
      
     /*  this.user.push(data) */
     this.user = data;
    
     console.log(this.user)
     this.peganum();
     console.log(this.numerocard);
     
    })
  }

  modal(usuario){
    this.close = true;
    this.confirma = false;
    this.confirmodal = true;
    this.usuarioclick = usuario;
    this.peganum();
     console.log(this.numerocard);
    this.corpo.destination_user_id = usuario.id;
  }

   peganum(){
    
    for (let j=0; j < this.cartao.length; j++){
      
    const atual = this.cartao[j].card_number;
    this.numerocard.push(atual);
    
    }
  }
  async enviar(){
  const cartaoselecionado = (document.getElementById('CCC') as HTMLSelectElement);
  const entradatexto = (document.getElementById('digita') as HTMLSelectElement);
  let selected = cartaoselecionado.selectedIndex;
  let selecionado = this.cartao[selected];
  console.log(selecionado);
  this.corpo.card_number = selecionado.card_number;
  this.corpo.cvv = selecionado.cvv;
  this.corpo.expiry_date = selecionado.expiry_date ;
  this.corpo.value = entradatexto.value;
  console.log(this.corpo);
  this.myService.informacao(this.corpo);
  }

  pagamento(){
    this.enviar().then(()=> { console.log(this.corpo)
    this.confirmado = false;
    
    })
  
  }
  fechar(){
    this.confirmodal = false;
    this.confirma = true;
    this.confirmado = true;
    /* const pagamento =  */
  }
}
