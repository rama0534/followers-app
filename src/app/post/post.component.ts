import { PostService } from './../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any;
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http:HttpClient,
    private service:PostService
  ) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe({
      next:  (response) => {
        this.posts = response; 
      },
      error:  (error: any) => {
          alert("Unexpected error");
          console.log(error);
      },
      complete: () => {
        console.log("Request complete");
      }
    })
  }

  createPost(input: HTMLInputElement){
    let post: any = {title: input.value};
    input.value = '';
    this.service.create(this.baseUrl, post).subscribe(
      {
        next: (res) => {
          this.posts.splice(0, 0, post);
        },
        error: (error) => {
          alert(`Unexpected error ${error}`);
        },
        complete: () => {
          console.log("Request completed")
        }
      })
  }

  updatePost(post:any){
   this.service.update(this.baseUrl, post).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        alert("Unexpected error");
        },
      complete: () => {
        console.log("Request completed")
      }
      })
    }
  

  deletePost(post: any) {
    this.service.delete(this.baseUrl, post.id).subscribe({
      next: (res: any) => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
            console.log(res);
      },
      error: (error:  ErrorHandlerService) => { 
        alert(error); 
        },
      complete: () => {
        console.log("Request completed")
      }
    } 
    );
  }

}
