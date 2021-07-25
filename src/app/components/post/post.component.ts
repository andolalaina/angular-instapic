import { style, trigger, state, transition, animate } from '@angular/animations';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, AfterViewInit {
  @Input() user!: object;
  @Input() description!: string;
  @Input() likeNumber!: number;
  @Input() uploadDate!: string;
  @Input() medias!: string[];

  @ViewChild("mediaContainer") mediaContainerRef: ElementRef;

  @Input() activeMediaIndex: number=0;
  
  scrollRight(): void {
    if (this.activeMediaIndex < this.medias.length - 1) {
      this.activeMediaIndex += 1;
      this.mediaContainerRef.nativeElement.scrollLeft += 400
    }
  }
  
  scrollLeft(): void {
    if (this.activeMediaIndex > 0) {
      this.activeMediaIndex -= 1;
      this.mediaContainerRef.nativeElement.scrollLeft -= 400;
    }
  }

  constructor() { 
  }

  ngOnInit(): void {
    this.medias = [
      "https://picsum.photos/400",
      "https://picsum.photos/400",
      "https://picsum.photos/400",
    ]  
  }

  ngAfterViewInit(): void {
  }

}
