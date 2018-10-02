import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RankingComponent } from './ranking/ranking.component';
import { SoporteComponent } from './soporte/soporte.component';
import { ErrorComponent } from './error/error.component';
import { RegistroComponent } from './registro/registro.component';

const appRoutes: Route[] = [
  { path: '',
    redirectTo:'/main',
    pathMatch: 'full'}

  { path: 'main',
    component: MainComponent
  }

  { path: 'soporte',
    component: SoporteComponent
  }

  { path: 'ranking',
    component: RankingComponent
  }

  { path: 'registro',
    component: RegistroComponent
  }

  { path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    RankingComponent,
    SoporteComponent,
    ErrorComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
