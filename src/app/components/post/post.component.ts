import { style, trigger, state, transition, animate } from '@angular/animations';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PostService } from 'src/app/services/post.service';
import { Media } from 'src/app/media';

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
  @Input() medias!: Media[];

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

  constructor(private postService:PostService) {}

  ngOnInit(): void {
    this.postService.getMedias().subscribe((media) => {
      this.medias = ([media])
    })
  }

  ngAfterViewInit(): void {
  }

}
