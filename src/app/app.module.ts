import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigatorComponent } from './component/navigator/navigator.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {Desafio3Component} from "./component/desafio3/desafio3.component";
import {Desafio1Component} from "./component/desafio1/desafio1.component";
import {Desafio2Component} from "./component/desafio2/desafio2.component";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSliderModule} from '@angular/material/slider';
import { DialogoComponent } from './component/desafio3/dialogo/dialogo.component';
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import { NgxMaskModule, IConfig } from 'ngx-mask'


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    Desafio1Component,
    Desafio2Component,
    Desafio3Component,
    DialogoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatSnackBarModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatSliderModule,
        MatSelectModule,
        MatTableModule,
        MatRadioModule,
      NgxMaskModule.forRoot(),
    ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

