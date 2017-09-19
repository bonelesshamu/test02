import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MainComponent, ROUTES} from './main.component';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [ //コンポーネント,ディレクティブ,パイプ
        MainComponent,
        AppComponent
    ],
    imports: [  //外部@NgModuleで定義されたモジュール
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [ //DIするサービス
    ],
    bootstrap: [MainComponent] //アプリ起動時コンポーネント
})
export class AppModule {}
