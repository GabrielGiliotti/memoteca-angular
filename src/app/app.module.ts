import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuralComponent } from './components/mural/mural.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    MuralComponent,
    CardComponent,
    DeleteModalComponent,
    UpdateModalComponent,
    CardLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
