import { Component, VERSION } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public alerta: ToastController) {}
  resultado: Number;
  num1: string;
  num2: string;

  somar() {
    this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
  }
  subtrair() {
    this.resultado = parseFloat(this.num1) - parseFloat(this.num2);
  }
  multiplicar() {
    this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
  }
  dividir() {
    if (this.num1 == '0' || this.num2 == '0') {
      this.presentToast();
    } else {
      this.resultado = parseFloat(this.num1) / parseFloat(this.num2);
    }
  }
  async presentToast() {
    const toast = await this.alerta.create({
      message: 'Nada é divisível por 0.',
      duration: 2000,
    });
    toast.present();
  }
}
