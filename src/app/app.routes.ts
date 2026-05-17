import { Routes } from '@angular/router';
import { Principal } from './login/principal/principal';
import { AlunoComponent } from './aluno/aluno/aluno';
import { ProfessorComponent } from './professor/professor';
import { DashboardComponent } from './dashboard/dashboard/dashboard';

export const routes: Routes = [
    {path: '', component: Principal},
    { path: 'dashboard', component: DashboardComponent },
    {path: 'dashboard/alunos', component: AlunoComponent},
    {path: 'dashboard/professores', component: ProfessorComponent},
];
