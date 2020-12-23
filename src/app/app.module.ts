import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { SidebarService } from './services/sidebar.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule, RouterStateSnapshot } from '@angular/router';
import { routes } from './app-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MachineComponent } from './components/machine/machine.component';
import { SensorComponent } from './components/sensor/sensor.component';
import { WaterTemplateComponent } from './components/sensors/water-template/water-template.component';
import { PressureTemplateComponent } from './components/sensors/pressure-template/pressure-template.component';
import { TemperatureTemplateComponent } from './components/sensors/temperature-template/temperature-template.component';
import { HumidityTemplateComponent } from './components/sensors/humidity-template/humidity-template.component';
import { CurrentTemplateComponent } from './components/sensors/current-template/current-template.component';
import { VoltTemplateComponent } from './components/sensors/volt-template/volt-template.component';
import { WaterDetailTemplateComponent } from './components/sensors/water-detail-template/water-detail-template.component';
import { PressureDetailTemplateComponent } from './components/sensors/pressure-detail-template/pressure-detail-template.component';
import { TemperatureDetailTemplateComponent } from './components/sensors/temperature-detail-template/temperature-detail-template.component';
import { HumidityDetailTemplateComponent } from './components/sensors/humidity-detail-template/humidity-detail-template.component';
import { CurrentDetailTemplateComponent } from './components/sensors/current-detail-template/current-detail-template.component';
import { VoltDetailTemplateComponent } from './components/sensors/volt-detail-template/volt-detail-template.component';
import { OperationalComponent } from './components/settings/operational/operational.component';
import { AlertComponent } from './components/settings/alert/alert.component';
import { AlarmComponent } from './components/settings/alarm/alarm.component';
import { OpAlertComponent } from './components/history/op-alert/op-alert.component';
import { ErrorsComponent } from './components/history/errors/errors.component';
import { EventComponent } from './components/history/event/event.component';
import { AccountComponent } from './components/account/account.component';
import { SensorSettingComponent } from './components/settings/sensor-setting/sensor-setting.component';
import { ErrorAlertComponent } from './components/settings/error-alert/error-alert.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    AboutUsComponent,
    ContactComponent,
    FaqComponent,
    ErrorComponentComponent,
    HomeComponent,
    ForgotPasswordComponent,
    MachineComponent,
    SensorComponent,
    WaterTemplateComponent,
    PressureTemplateComponent,
    TemperatureTemplateComponent,
    HumidityTemplateComponent,
    CurrentTemplateComponent,
    VoltTemplateComponent,
    WaterDetailTemplateComponent,
    PressureDetailTemplateComponent,
    TemperatureDetailTemplateComponent,
    HumidityDetailTemplateComponent,
    CurrentDetailTemplateComponent,
    VoltDetailTemplateComponent,
    OperationalComponent,
    AlertComponent,
    AlarmComponent,
    OpAlertComponent,
    ErrorsComponent,
    EventComponent,
    AccountComponent,
    SensorSettingComponent,
    ErrorAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(routes, {}),
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
