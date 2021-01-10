import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinExamPasswordComponent } from '../student/join-exam-password/join-exam-password.component';
import { JoinExamComponent } from '../student/join-exam/join-exam.component';
import { QuestionAnswerComponent } from '../student/question-answer/question-answer.component';
import { CreateExamComponent } from '../teacher/create-exam/create-exam.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },

            { path: 'join-exam', component: JoinExamComponent },
            { path: 'join-exam-password', component: JoinExamPasswordComponent },
            { path: 'exam-question-answer', component: QuestionAnswerComponent },

            { path: 'create-exam', component: CreateExamComponent },

            
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
            {
                path: 'bs-element',
                loadChildren: () => import('./bs-element/bs-element.module').then((m) => m.BsElementModule)
            },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule) },
            {
                path: 'components',
                loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
            },
            {
                path: 'blank-page',
                loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}