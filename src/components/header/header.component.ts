import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly phoneNumber = '5542988836240';
  readonly message = 'Oi! Vim do site e quero pedir os cones trufados 💕';
  
  readonly whatsappUrl = computed(() => 
    `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message)}`
  );

  openWhatsApp(): void {
    window.open(this.whatsappUrl(), '_blank');
  }
}
