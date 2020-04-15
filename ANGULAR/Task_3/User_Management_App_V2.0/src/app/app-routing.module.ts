import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '', 
        loadChildren: ()=> import('./active/active.module').then(
            (file) => file.ActiveModule
        )
    },
    {
        path: '', 
        loadChildren: ()=> import('./deleted/deleted.module').then(
            (file) => file.DeletedModule
        )
    },
    {
        path: '', 
        loadChildren: ()=> import('./manage/manage.module').then(
            (file) => file.ManageModule
        )
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
