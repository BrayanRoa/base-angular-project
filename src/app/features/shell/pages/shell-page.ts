import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

export interface IItemMenu {
  link: string
  name: string
  icon: string
}

@Component({
  selector: 'app-shell-page',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './shell-page.html',
  styleUrl: './shell-page.scss'
})
export class ShellPage implements OnInit {

  itemMenu: IItemMenu[] = []
  baseRoute:string = '/dashboard'

  ngOnInit(): void {
    this.itemMenu = [
      {
        link: `${this.baseRoute}/operations`,
        name: "Operaciones",
        icon: "🏠"
      },
      {
        link: `${this.baseRoute}/imports/list`,
        name: "Importaciones",
        icon: "🏠"
      },
      {
        link: `${this.baseRoute}/imports/create`,
        name: "Crear importación",
        icon: "🏠"
      }

    ]
  }
}
