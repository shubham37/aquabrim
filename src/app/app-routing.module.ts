import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component'
import { AboutUsComponent } from './components/about-us/about-us.component'
import { ErrorComponentComponent } from './components/error-component/error-component.component'
import { HomeComponent } from './components/home/home.component'
import { SignupComponent } from './components/signup/signup.component'
import { LoginComponent } from './components/login/login.component'
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { MachineComponent } from './components/machine/machine.component'
import { SensorComponent } from './components/sensor/sensor.component'
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { OperationalComponent } from './components/settings/operational/operational.component';
import { AlarmComponent } from './components/settings/alarm/alarm.component';
import { SensorSettingComponent } from './components/settings/sensor-setting/sensor-setting.component';
import { AlertComponent } from './components/settings/alert/alert.component';
import { ErrorAlertComponent } from './components/settings/error-alert/error-alert.component';
import { OpAlertComponent } from './components/history/op-alert/op-alert.component';
import { ErrorsComponent } from './components/history/errors/errors.component';
import { EventComponent } from './components/history/event/event.component';


export const routes: Routes = [
  { path: '', component: MainComponent},

  { path: 'setting/operational', component: OperationalComponent},
  { path: 'setting/alert', component: AlertComponent},
  { path: 'setting/error-alert', component: ErrorAlertComponent},
  { path: 'setting/alarm', component: AlarmComponent},
  { path: 'setting/sensor', component: SensorSettingComponent},

  { path: 'history/op-alert', component: OpAlertComponent},
  { path: 'history/errors', component: ErrorsComponent},
  { path: 'history/event', component: EventComponent},

  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'machines', component:  HomeComponent},
  { path: 'machine/:id', component:  MachineComponent},
  { path: 'sensor/:id', component:  SensorComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forgot_password', component: ForgotPasswordComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
