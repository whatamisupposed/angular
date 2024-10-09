import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing-module.ts';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { CustomerContactFormComponent } from './customer-contact-form/customer-contact-form.component';
import { MaterialModule } from './modules/material.module';
inport { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    TimesheetComponent,
    AnalyticsComponent,
    TopNavbarComponent,
    AnalyticsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationModule,
   MaterialModule,
   FormsModule,
HttpClientModule,
AngularFireModule.initializeApp(environment.firebase),
AngularFirestoreModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }