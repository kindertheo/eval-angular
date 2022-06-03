import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoncomposantComponent } from './moncomposant/moncomposant.component';
import { Moncomposant2Component } from './moncomposant2/moncomposant2.component';
import { TodoComponent } from './todo/todo.component';
import { BtnRougeDirective } from './btn-rouge.directive';
import { TodoLigComponent } from './todo-lig/todo-lig.component';
import { ConnectFromComponent } from './connect-from/connect-from.component';
import { LimitPipePipe } from './limit-pipe.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CountCharPipe } from './count-char.pipe';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './user/list/list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ArticleComponent } from './article/article.component';
import { ListComponent as ListArticleComponent } from './article/list/list.component';
import { CommentComponent } from './comment/comment.component';
import { ListComponent as ListCommentComponent } from './comment/list/list.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { DeleteArticleComponent } from './article/delete-article/delete-article.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { DeleteCommentComponent } from './comment/delete-comment/delete-comment.component';
import { UpdateCommentComponent } from './comment/update-comment/update-comment.component';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MoncomposantComponent,
    Moncomposant2Component,
    TodoComponent,
    BtnRougeDirective,
    TodoLigComponent,
    ConnectFromComponent,
    LimitPipePipe,
    NavbarComponent,
    FooterComponent,
    CountCharPipe,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserComponent,
    ListComponent,
    UserProfileComponent,
    ArticleComponent,
    ListArticleComponent,
    CommentComponent,
    ListCommentComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    DeleteArticleComponent,
    UpdateArticleComponent,
    DeleteCommentComponent,
    UpdateCommentComponent,
    CreateCommentComponent,
    CreateArticleComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// url api : https://reseau.jdedev.fr/api/user
