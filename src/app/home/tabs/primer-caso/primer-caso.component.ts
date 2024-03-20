import { CommonModule } from '@angular/common';
import { Component, Inject, inject, type OnInit } from '@angular/core';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSpinner,
  IonTitle,
  IonToast,
  IonToolbar,
  ToastController,
} from '@ionic/angular/standalone';
import { PokemonListResponse } from 'src/interfaces/pokemon.interface';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-primer-caso',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonSpinner,
    IonToast,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
  ],
  templateUrl: './primer-caso.component.html',
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
}

  `,
})
export class PrimerCasoComponent implements OnInit {
  pokemonService = inject(PokemonService);
  toastController = Inject(ToastController);

  pokemonList: PokemonListResponse['results'] = [];

  loading = false;

  ngOnInit(): void {
    console.log('PrimerCasoComponent ngOnInit');
    this.loadPokemons();
  }

  loadPokemons() {
    this.loading = true;
    this.pokemonService.GetPokemons().subscribe({
      next: (response) => {
        this.pokemonList = response.results;
        this.loading = false;
        this.toastController.create({
          message: 'Pokemones cargados',
          duration: 3000,
        });
      },
      error: () => {
        this.loading = false;
        this.toastController.create({
          message: 'Error al cargar los pokemones',
          duration: 3000,
        });
      },
    });
  }
}
