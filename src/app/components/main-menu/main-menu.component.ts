import { Component } from '@angular/core';
import { playlists } from '@lib/data';
import { PlaylistItemCardComponent } from '../playlist-item-card/playlist-item-card.component';
import { GreetingComponent } from '../greeting/greeting.component';
@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [PlaylistItemCardComponent, GreetingComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  playlists = playlists;

}