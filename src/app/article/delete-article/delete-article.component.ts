import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteService } from 'src/app/service/delete.service';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {

  deleteService: DeleteService
  id: number
  baseRoute: string

  constructor(private router: Router, private route: ActivatedRoute, deleteService: DeleteService) { 
    this.deleteService = deleteService
    this.id = 0
    this.baseRoute = ''
  }

  ngOnInit(): void {
  }


}
