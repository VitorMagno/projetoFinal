import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabsCardComponent } from './tabs-card/tabs-card.component';
import { ModalAdContratosComponent } from './modal-ad-contratos/modal-ad-contratos.component';
import { ModalAdItemComponent } from './modal-ad-item/modal-ad-item.component';
import { ModalItemComponent } from './modal-item/modal-item.component';
import { AbGeralComponent } from './ab-geral/ab-geral.component';
import { AbItensComponent } from './ab-itens/ab-itens.component';
import { AbProjetosComponent } from './ab-projetos/ab-projetos.component';




@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent,
    NavbarComponent,
    SidebarComponent,
    TabsCardComponent,
    ModalAdContratosComponent,
    ModalAdItemComponent,
    ModalItemComponent,
    AbGeralComponent,
    AbItensComponent,
    AbProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
