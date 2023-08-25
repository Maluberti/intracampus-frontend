import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ReadAtletaComponent } from './components/views/atleta/read-atleta/read-atleta.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
  },
  {
    path: 'atleta/:id',
    component: ReadAtletaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
