import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Flavor {
  name: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  readonly flavors = signal<Flavor[]>([
    { name: 'Cone trufado Bis Branco', imageUrl: 'assets/BisBranco.jpeg', description: 'Cone trufado recheado com creme de chocolate branco e pedacinhos crocantes de Bis branco.' },
    { name: 'Cone trufado Cookies', imageUrl: 'assets/cookies.jpeg', description: 'Recheio cremoso com pedacinhos de cookie, crocante e chocolatudo na medida certa.' },
    { name: 'Cone trufado Leite Ninho', imageUrl: 'assets/leiteNinho.jpeg', description: 'Creme de leite ninho bem suave e aveludado, perfeito para quem ama um docinho delicado.' },
    { name: 'Cone trufado Nutella', imageUrl: 'assets/nutella.jpeg', description: 'Muito recheio de Nutella cremosa, para os apaixonados por chocolate com avelã.' },
    { name: 'Cone trufado Oreo', imageUrl: 'assets/Oreo.jpeg', description: 'Creme trufado com pedacinhos de Oreo, combinando crocância e chocolate em cada mordida.' },
    { name: 'Cone trufado Paçoca', imageUrl: 'assets/paçoca.jpeg', description: 'Recheio cremoso de amendoim com paçoca esfarelada, sabor de festa junina o ano inteiro.' },
  ]);

  readonly phoneNumber = '5542988836240';

  orderFlavor(flavorName: string): void {
    const message = `Oi! Vim do site e quero pedir o cone trufado de ${flavorName} 💕`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}