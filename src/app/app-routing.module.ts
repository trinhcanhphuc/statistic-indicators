import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { ProductComponent } from './components/product/product.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CreateNodeInfoComponent } from './components/node-info/create-node-info/create-node-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'introduce', component: IntroduceComponent },
  { path: 'product', component: ProductComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'create-node-info/:nodeId/:soilMoisture/:soilTemperature/:airHumidity/:airTemperature', component: CreateNodeInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
