import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloginComponent } from './clogin/clogin.component';
import { CmainComponent } from './cmain/cmain.component';


const appRoutes: Routes = [
    {
        path: '',
        component: CloginComponent,
    },
    {
        path: 'main',
        component: CmainComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);