import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  text: string;
  name: string;
  stars: number;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  readonly testimonials = signal<Testimonial[]>([
    { 
      text: 'O melhor cone trufado que já comi! A massa é crocante e o recheio é super cremoso. O de Ninho com Nutella é divino!',
      name: 'Juliana S.',
      stars: 5 
    },
    { 
      text: 'Atendimento impecável e os doces são maravilhosos. Dá pra sentir que é feito com muito amor e carinho. Virei cliente fiel!',
      name: 'Marcos P.',
      stars: 5 
    },
    { 
      text: 'Perfeito para alegrar a tarde! Pedi o de maracujá e me surpreendi com o sabor. Super recomendo a Sonhos da Mavi.',
      name: 'Fernanda L.',
      stars: 5
    },
  ]);

  getStars(count: number): number[] {
    return Array(count).fill(0);
  }
}
