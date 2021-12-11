import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbGeralComponent } from './ab-geral/ab-geral.component';
import { AbItensComponent } from './ab-itens/ab-itens.component';
import { AbProjetosComponent } from './ab-projetos/ab-projetos.component';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch:'full'},
  { path: 'inicio', component: AppComponent},
  { path: 'listar', component: ListarComponent},
  { path: 'cadastrar', component: CadastrarComponent},
  { path: 'cadastrar/geral', component: AbGeralComponent},
  { path: 'cadastrar/itens', component: AbItensComponent},
  { path: 'cadastrar/projetos', component: AbProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
