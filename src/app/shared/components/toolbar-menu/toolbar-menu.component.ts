import { Component, Input } from '@angular/core';
import { MenuItem } from '@app/shared/models/shared/menuItem';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: [
    './toolbar-menu.component.scss',
  ]
})
export class ToolbarMenuComponent {
  @Input() shadow = false;
  @Input() menuTitle: string = '';
  @Input() popText: boolean = false;
  @Input() items_menu: MenuItem[] = [];

  constructor() { }

}
