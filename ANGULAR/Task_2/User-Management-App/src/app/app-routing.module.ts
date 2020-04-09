import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveComponentComponent } from './active/active-component/active-component.component';
import { DeletedComponentComponent } from './deleted/deleted-component/deleted-component.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'active', component: ActiveComponentComponent },
    { path: 'deleted', component: DeletedComponentComponent},
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
