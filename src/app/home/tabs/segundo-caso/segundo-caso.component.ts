import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  type OnInit,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Geolocation } from '@capacitor/geolocation';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  ToastController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-segundo-caso',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonInput,
    ReactiveFormsModule,
  ],
  templateUrl: './segundo-caso.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
  :host {
    display: block;
    
  }

  .text-center{
  text-align: center !important;
  }

  .toolbar{
    background-color: red !important;
  }

  .pokemon-list{
    display: flex;
    flex-direction: column;
    gap: 20px 5px;
    padding: 20px;
  }

  .pokemon-card{
    padding: 10px;
    shadow: 0 0 5px 0 rgba(0,0,0,0.5);
  }

  .card-title{
    font-size: 1.2rem !important;
    font-weight:  700;
    color: #666666;
  }

  .border{
    border: 1px solid #000;
  }

  .font-bold{
    font-weight: 900;
  }

  .border-radius{
    border-radius: 10px;
  }

  .shadow {
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);

  .icons{
    width: 100% !important;
    display: flex !important;
    gap: 25px !important;
    align-items: center !important;
    font-size: 1.5rem !important;
    color: white !important;
  }

  .icon-background .icon-inner {
  background-color: #3880FF;
  padding: 10px;
  border-radius: 50%;
}

}

`,
})
export class SegundoCasoComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;
  formBuilder = inject(FormBuilder);
  toastController = Inject(ToastController);

  constructor() {}

  ngOnInit(): void {
    console.log('SegundoCasoComponent ngOnInit');
    this.getLocation();
  }

  form = this.formBuilder.group({
    stringValue: '',
  });

  async getLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.form.controls['stringValue'].setValue(
        `Latitud: ${this.latitude} / Longitud: ${this.longitude}`
      );
    } catch (error) {
      console.error('Error getting location', error);
    }
  }
}
