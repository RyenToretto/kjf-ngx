import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'components',
        pathMatch: 'full'
    },
    {
        path: 'components',
        loadChildren: () => import('./app-content/app-content.module').then(m => m.AppContentModule)
    },
    {
        path: '**',
        redirectTo: 'components'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
