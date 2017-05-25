import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcoffeeComponent } from './ccoffee/ccoffee.component';
import { CbentoComponent } from './cbento/cbento.component';


const appRoutes: Routes = [
    {
        path: 'coffee',
        component: CcoffeeComponent
    },

    {
        path: 'bento',
        component: CbentoComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);