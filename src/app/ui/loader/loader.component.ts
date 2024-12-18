import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

/**
 * LoaderComponent displays a loading indicator
 * with an optional message.
 */
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  @Input() isLoading: boolean = false;
  @Input() loadingMessage: string = 'Loading...';

}
