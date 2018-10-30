import { AComponent } from "./a/a.component";
import { BComponent } from "./b/b.component";
import { CComponent } from "./c/c.component";
import {Routes} from "@angular/router";

export const routes:Routes = [
    {path:'', redirectTo:'/A', pathMatch:'full'},
    {path:'A', component: AComponent},
    {path:'B', component: BComponent},
    {path:'C', component: CComponent},
  ];
