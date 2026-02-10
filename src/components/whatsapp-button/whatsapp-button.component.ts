import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButtonComponent {
  readonly phoneNumber = '5542988836240';
  readonly message = 'Oi! Vim do Instagram e quero pedir os cones trufados 💕';
  
  readonly whatsappUrl = computed(() => 
    `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message)}`
  );

  openWhatsApp(): void {
    window.open(this.whatsappUrl(), '_blank');
  }
}
