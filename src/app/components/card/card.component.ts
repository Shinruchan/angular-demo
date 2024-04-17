import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../services/api.service';
import { TitleCasePipe } from '@angular/common';
import { KebabToHumanPipe } from '../../kebab-to-human.pipe';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
  imports: [TitleCasePipe, KebabToHumanPipe],
})
export class CardComponent {
  @Input() pokemon?: Pokemon | null;
  @Output() onUserSpam = new EventEmitter<void>();

  private clickCount = 0;

  onImageClick() {
    this.clickCount++;

    if (this.clickCount > 2) {
      this.clickCount = 0;
      this.onUserSpam.emit();
    }
  }
}
