import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

// services

// environment
import { environment } from '../environments/environment';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { ProductComponent } from './components/product/product.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CreateNodeInfoComponent } from './components/node-info/create-node-info/create-node-info.component';
import { ListNodeInfoComponent } from './components/node-info/list-node-info/list-node-info.component';
import { DeleteNodeInfoComponent } from './components/node-info/delete-node-info/delete-node-info.component';
import { EditNodeInfoComponent } from './components/node-info/edit-node-info/edit-node-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroduceComponent,
    ProductComponent,
    AboutUsComponent,
    CreateNodeInfoComponent,
    ListNodeInfoComponent,
    DeleteNodeInfoComponent,
    EditNodeInfoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, environment.firebase.projectId),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
