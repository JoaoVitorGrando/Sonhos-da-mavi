import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly phoneNumber = '55 42 98883-6240';
  readonly message = 'Oi! Vim do site e quero pedir os cones trufados 💕';
  
  readonly whatsappUrl = computed(() => 
    `https://api.whatsapp.com/send?phone=5542988836240&text=${encodeURIComponent(this.message)}`
  );
}
