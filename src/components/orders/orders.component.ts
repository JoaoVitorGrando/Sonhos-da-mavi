import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {
  readonly phoneNumber = '5542988836240';
  readonly message = 'Oi! Vim do site e gostaria de fazer uma encomenda especial. 💕';

  readonly whatsappUrl = computed(() =>
    `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message)}`
  );

  openWhatsApp(): void {
    window.open(this.whatsappUrl(), '_blank');
  }
}
