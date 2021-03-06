import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { AddLanguageAndTypeComponent } from "./add-language-and-type/add-language-and-type.component";
import { AdministratorRoleManagementComponent } from "./administrator-role-management/administrator-role-management.component";
import { ArticleAwaitingValidationComponent } from "./article-awaiting-validation/article-awaiting-validation.component";
import { EditLanguageComponent } from "./edit-language/edit-language.component";
import { EditTypeComponent } from "./edit-type/edit-type.component";
import { ArticlePromotedHomeComponent } from "./article-promoted-home/article-promoted-home.component";
import { ArticleSuggestionHomeComponent } from "./article-suggestion-home/article-suggestion-home.component";
import { ArticleConsultationComponent } from './article-consultation/article-consultation.component';
import { CarouselArticleComponent } from './carousel-article/carousel-article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ListArticleCreatedComponent } from './list-article-created/list-article-created.component';
import { ListArticleFavoriteComponent } from './list-article-favorite/list-article-favorite.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { QuickSearchComponent } from './quick-search/quick-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddLanguageAndTypeComponent,
    AdministratorRoleManagementComponent,
    ArticleAwaitingValidationComponent,
    EditLanguageComponent,
    EditTypeComponent,
    ArticlePromotedHomeComponent,
    ArticleSuggestionHomeComponent,
    ArticleConsultationComponent,
    CarouselArticleComponent,
    CreateArticleComponent,
    ListArticleCreatedComponent,
    ListArticleFavoriteComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    AdvancedSearchComponent,
    QuickSearchComponent,
    SearchResultComponent,
    ToolbarComponent,
    UserProfilComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
