import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/audio-recordings-list',
    pathMatch: 'full',
  },
  {
    path: 'audio-recordings-list',
    loadChildren: () =>
      import('../pages').then((mod) => mod.AudioRecordingsListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
