import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private blogType: string;
  public paragraphs : object [];
  public title: string;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpClient
  ) 
  { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.blogType = params.get('id');
      this.readJSON();
    });
  }

  readJSON(){
    this.httpService.get('./assets/text/'+ this.blogType + '.json').subscribe(
      data => {
        this.title = data['title'];
        this.paragraphs = data['paragraphs'];
      });
  }

  isEven(i : number){
    return i % 2 == 0;
  }

}
