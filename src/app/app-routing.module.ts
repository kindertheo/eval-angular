import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './user/list/list.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ArticleComponent } from './article/article.component';
import { ListComponent as ArticleListComponent } from './article/list/list.component';
import { CommentComponent } from './comment/comment.component';
import { ListComponent as CommentListComponent } from './comment/list/list.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { DeleteArticleComponent } from './article/delete-article/delete-article.component';
import { UpdateCommentComponent } from './comment/update-comment/update-comment.component';
import { DeleteCommentComponent } from './comment/delete-comment/delete-comment.component';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user',
    children: [
      { path: '', component: UserComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent},
      { path: 'logout', component: LogoutComponent },
      { path: 'list', component: ListComponent},
      { path: ':id', component: UserProfileComponent},
      { path: 'delete/:id', component: DeleteUserComponent},
      { path: 'update/:id', component: UpdateUserComponent},
     ]
  },
  { path: 'article',
  children: [
    { path: '', component: ArticleListComponent},
    { path: 'create', component: CreateArticleComponent},
    { path: ':id', component: ArticleComponent},
    { path: 'update/:id', component: UpdateArticleComponent},
    { path: 'delete/:id', component: DeleteArticleComponent},

    ]
  },
  { path: 'comment',
  children: [
    { path: '', component: CommentListComponent},
    { path: 'create/:id', component: CreateCommentComponent}, //id de l'article
    { path: ':id', component: CommentComponent},
    { path: 'update/:id', component: UpdateCommentComponent},
    { path: 'delete/:id', component: DeleteCommentComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

