import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

/**
 * Class for top bar.
 */
export class TopBarComponent {
  path!: string;

  /**
   * Constructor for TopBarComponent.
   * @param router - Object for navigation.
   * @param route - Object for query params.
   * @param auth - Object for authentification.
   */
  constructor(private router: Router, private route: ActivatedRoute, public auth: AuthService) {}
  
}
