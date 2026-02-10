import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    AboutComponent,
    MenuComponent,
    TestimonialsComponent,
    OrdersComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],
})
export class AppComponent {
  title = 'sonhos-da-mavi';
}
